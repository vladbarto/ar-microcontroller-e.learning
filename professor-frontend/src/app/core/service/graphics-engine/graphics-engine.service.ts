import {Injectable} from '@angular/core';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import GUI from 'three/examples/jsm/libs/lil-gui.module.min';
import {Mesh, Vector3} from 'three';
import {DragControls} from "three/examples/jsm/controls/DragControls";
import * as Blockly from 'blockly';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";


@Injectable({ providedIn: 'root' })
export class GraphicsEngineService{
    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    private composer!: EffectComposer;
    private controls!: OrbitControls;
    private outlinePass!: OutlinePass;

    private raycaster = new THREE.Raycaster();
    private mouse = new THREE.Vector2();
    private arduino: THREE.Object3D | null = null;
    private gui: GUI | null = null;

    private readonly objects: THREE.Object3D[] = [];
    private readonly light = new THREE.DirectionalLight(0xffffff, 0.5);
    private readonly light2 = new THREE.PointLight(0xffffff, .6);

    private readonly fillLight = new THREE.AmbientLight(0xffffff, 1.5);
    private readonly registers = {
        PIO_PER: 0,
        PIO_OER: 0,
        PIO_SODR: 0,
        PIO_CODR: 0
    };

    private sceneHierarchy: THREE.Object3D[] = []; // top-level objects like Arduino, others
    private _hierarchy: Mesh[] = [];
    private _selectedMesh: Mesh | null = null;
    private dragControls: DragControls;

    constructor() {}

    ngOnDestroy(): void {
        if (this.gui) {
            this.gui.destroy();
            this.gui = undefined;
        }
    }

    private getWorkspaceRef: () => Blockly.WorkspaceSvg;

    public setWorkspaceRef(ref: () => Blockly.WorkspaceSvg) {
        this.getWorkspaceRef = ref;
    }


    public async init(canvas: HTMLCanvasElement): Promise<void> {
        this.setupScene(canvas);
        await this.loadArduino();
        this.setupPostProcessing();
        this.setupGui();
        this.addAxesHelper();
        this.animate();
        canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.setupKeyListener();
    }

    private setupScene(canvas: HTMLCanvasElement): void {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x073f72);

        this.camera = new THREE.PerspectiveCamera(1, canvas.clientWidth / canvas.clientHeight, 1, 1000);
        this.camera.position.z = 5;
        this.camera.position.y = 5;
        this.camera.lookAt(0, 0, 0);

        this.renderer = new THREE.WebGLRenderer({ canvas });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);

        this.controls = new OrbitControls(this.camera, canvas);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;

        this.renderer.outputColorSpace = THREE.SRGBColorSpace;

        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.5;

        this.light.position.set(5, 10, 7.50);
        this.light.target.position.set(0, 0, 0);
        this.light2.position.set(-5, 0, 0);

        this.scene.add(this.light);
        this.scene.add(this.light.target);
        this.light.lookAt(this.light.target.position); // <-- ADD THIS
        //this.scene.add(this.light2);
        this.scene.add(this.fillLight);

    }

    private setupPostProcessing(): void {
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));

        this.outlinePass = new OutlinePass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            this.scene,
            this.camera
        );
        this.outlinePass.edgeStrength = 8;
        this.outlinePass.edgeGlow = 1.5;
        this.outlinePass.edgeThickness = 5;
        this.outlinePass.visibleEdgeColor.set(0xffff00);

        this.composer.addPass(this.outlinePass);

    }

    private async loadModel(
        glbPath: string,
        texturePath?: string
    ): Promise<THREE.Object3D> {
        const gltfLoader = new GLTFLoader();
        const gltf = await gltfLoader.loadAsync(glbPath);
        const object = gltf.scene;

        new RGBELoader().load('assets/studio_small_08_1k.hdr', (hdrTexture) => {
            hdrTexture.mapping = THREE.EquirectangularReflectionMapping;
            this.scene.environment = hdrTexture;
            this.scene.background = hdrTexture; // sau setează alt fundal solid
        });

        if (texturePath) {
            const texture = new THREE.TextureLoader().load(texturePath);
            object.traverse(child => {
                if (child instanceof THREE.Mesh) {
                    const mat = child.material;
                    if (Array.isArray(mat)) {
                        mat.forEach(m => {
                            if (m instanceof THREE.MeshStandardMaterial) {
                                m.map = texture;
                                m.needsUpdate = true;
                            }
                        });
                    } else if (mat instanceof THREE.MeshStandardMaterial) {
                        mat.map = texture;
                        mat.needsUpdate = true;
                    }
                }
            });
        }

        return object;
    }


    private onMouseDown(event: MouseEvent): void {
        this.gui.show();

        const rect = this.renderer.domElement.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        this.controls.update();
        this.camera.updateMatrixWorld();
        this.raycaster.setFromCamera(this.mouse, this.camera);

        if (!this.arduino) return;

        this._hierarchy = [];
        this.arduino.traverse(child => {
            if (child instanceof THREE.Mesh) {
                this._hierarchy.push(child);
                child.geometry.computeBoundingBox();
                child.geometry.computeBoundingSphere();
                child.layers.enable(1);
                this.camera.layers.enable(1);
                this.raycaster.layers.enable(1);
            }
        });

        const intersections = this.raycaster.intersectObjects(this._hierarchy, true);
        if (intersections.length > 0) {
            const selected = intersections[0].object as THREE.Mesh;
            const root = this.getComponentRoot(selected);
            this.selectMesh(root);
        }
        this.sceneHierarchy.forEach(obj => this.logHierarchy(obj));
    }

    private logHierarchy(node: THREE.Object3D, indent: number = 0): void {
        const pad = ' '.repeat(indent * 2);
        console.log(`${pad}- ${node.name || '[Unnamed]'} (${node.type})`);

        node.children.forEach(child => {
            this.logHierarchy(child, indent + 1);
        });
    }

    private getComponentRoot(obj: THREE.Object3D): THREE.Object3D {
        const rootCandidate = this.sceneHierarchy[0]; // Arduino Uno R3
        let current: THREE.Object3D | null = obj;

        while (current && current.parent !== rootCandidate) {
            current = current.parent;
        }

        return current ?? obj;
    }



    private animate(): void {
        requestAnimationFrame(() => this.animate());
        this.controls.update();
        this.composer.render();
        this.turnOffUpLight(this.angleBetweenCameraAndLight());
    }

    private addAxesHelper(): void {
        const axisLength = 10;

        const ox = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(axisLength, 0, 0)]),
            new THREE.LineBasicMaterial({ color: 0xff0000 })
        );

        const oy = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, axisLength, 0)]),
            new THREE.LineBasicMaterial({ color: 0x00ff00 })
        );

        const oz = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, axisLength)]),
            new THREE.LineBasicMaterial({ color: 0x0000ff })
        );

        this.scene.add(ox, oy, oz);
    }

    private async loadArduino() {
        this.arduino = await this.loadModel(
            'assets/objects_and_materials/board/arduino_uno_exact.glb'
        );
        this.arduino.name = "Arduino Uno R3"
        this.arduino.position.set(0, 0, 0);
        this.scene.add(this.arduino);
        this.objects.push(this.arduino);
        this.sceneHierarchy.push(this.arduino);
        this.rebuildHierarchy();
    }

    public async addObject(objectTtile: string, objPath: string, mtlPath?: string, texturePath?: string ): Promise<void> {
        const object = await this.loadModel(objPath);
        object.name = objectTtile
        this.scene.add(object);
        this.objects.push(object);
        this.sceneHierarchy.push(object);
        this.rebuildHierarchy();
    }

    get selectedMesh(): Mesh | null {
        return this._selectedMesh;
    }

    get hierarchyTree(): THREE.Object3D[] {
        return this.sceneHierarchy;
    }

    public selectMesh(meshOrParent: THREE.Object3D): void {
        this._selectedMesh = meshOrParent as Mesh;
        this.outlinePass.selectedObjects = [meshOrParent];
    }

    public setupGui() {
        this.gui = new GUI();
        this.gui.hide();
        const registersFolder = this.gui.addFolder("Registers");

        (Object.keys(this.registers) as (keyof typeof this.registers)[]).forEach((key) => {
            registersFolder
                .add(this.registers, key, 0, 1, 1)
                .onFinishChange((value) => {
                    const action = value === 1 ? 'SET' : 'CLEAR';

                    const workspace = this.getWorkspaceRef?.();
                    if (workspace) this.createStepBlockWithTargetAndAction(workspace, key, action);
                });
        });
    }

    private createStepBlockWithTargetAndAction(
        workspace: Blockly.WorkspaceSvg,
        target: string,
        action: string
    ): void {
        const stepBlock = workspace.newBlock('step_block') as Blockly.BlockSvg;
        const targetBlock = workspace.newBlock('target_block') as Blockly.BlockSvg;

        targetBlock.setFieldValue(target, 'targetName');
        stepBlock.setFieldValue(action, 'action');

        stepBlock.initSvg(); stepBlock.render();
        targetBlock.initSvg(); targetBlock.render();

        const y = workspace.getAllBlocks(false).length * 50;
        stepBlock.moveBy(10, y);
        targetBlock.moveBy(150, y);

        const input = stepBlock.getInput('Target');
        if (input?.connection && targetBlock.outputConnection) {
            input.connection.connect(targetBlock.outputConnection);
        }

        workspace.render();
        Blockly.svgResize(workspace);
    }

    private rebuildHierarchy(): void {
        this._hierarchy = [];

        this.sceneHierarchy.forEach(obj => {
            if (obj instanceof THREE.Mesh) {
                this._hierarchy.push(obj);
            } else {
                obj.traverse(child => {
                    if (child instanceof THREE.Mesh && child.parent === obj) {
                        this._hierarchy.push(child);
                    }
                });
            }
        });

        this.camera.layers.enable(1);
        this.raycaster.layers.enable(1);
    }

    private setupDragControls(selectedObject: THREE.Object3D | null): void {
        if (!selectedObject) return;

        const dragTargets: THREE.Object3D[] = [];

        // Traverse through selectedObject and collect parent/children.
        selectedObject.traverse(child => {
            if (child instanceof THREE.Mesh) {
                dragTargets.push(child); // allow dragging children too
            }
        });

        if (this.dragControls) this.dragControls.dispose(); // reset if already set

        this.dragControls = new DragControls(dragTargets, this.camera, this.renderer.domElement);

        this.dragControls.addEventListener('dragstart', (event) => {
            this.controls.enabled = false;
        });

        this.dragControls.addEventListener('dragend', (event) => {
            this.controls.enabled = true;
            this.selectMesh(event.object); // Update selected mesh after drag
        });
    }

    public activateDragControls(): void {
        if (this.selectedMesh) {
            this.setupDragControls(this.selectedMesh); // Activate drag controls on the selected mesh
        }
    }

    public setupKeyListener(): void {
        window.addEventListener('keydown', this.onKeyDown.bind(this));
    }

    private onKeyDown(event: KeyboardEvent): void {
        if (event.key === 'g' || event.key === 'G') {
            this.activateDragControls();
        }
    }

    cameraVector: Vector3 = new Vector3();
    lightVector: Vector3 = new Vector3();

    private getVector(source: any, target: Vector3) {
        source.getWorldDirection(target);
    }

    private radiansToDegrees(angleRad) {
        return (angleRad * (180 / Math.PI)).toFixed(2);
    }

    private angleBetweenCameraAndLight() {
        this.getVector(this.camera, this.cameraVector);
        this.getVector(this.light, this.lightVector);

        return this.radiansToDegrees(this.cameraVector.angleTo(this.lightVector));
    }

    private turnOffUpLight(angle) {
        if(angle >= 150.0 && angle <= 160.0)
            this.light.intensity = 1;
        else if(angle > 160.0 && angle <= 170.0)
            this.light.intensity = 0.2
        else if(angle > 170.0 && angle <= 180.0)
            this.light.intensity = 0.05
        else
            this.light.intensity = 2;

    }
}
