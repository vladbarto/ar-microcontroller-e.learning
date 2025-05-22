import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import GUI from 'three/examples/jsm/libs/lil-gui.module.min';
import { JsonScriptService } from '../json-script/json-script.service';
import { Mesh } from 'three';
import {DragControls} from "three/examples/jsm/controls/DragControls";

@Injectable({ providedIn: 'root' })
export class GraphicsEngineService {
    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    private composer!: EffectComposer;
    private controls!: OrbitControls;
    private outlinePass!: OutlinePass;

    private raycaster = new THREE.Raycaster();
    private mouse = new THREE.Vector2();
    private arduino: THREE.Object3D | null = null;
    private gui = new GUI();

    private readonly objects: THREE.Object3D[] = [];
    private readonly light = new THREE.DirectionalLight(0xffffff, 0.8);
    private readonly light2 = new THREE.PointLight(0xffffff, .6);

    private readonly fillLight = new THREE.AmbientLight(0xffffff, 3);
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

    constructor(private jsonScript: JsonScriptService) {}

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
        this.camera.position.z = 400;

        this.renderer = new THREE.WebGLRenderer({ canvas });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);

        this.controls = new OrbitControls(this.camera, canvas);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;

        this.renderer.outputColorSpace = THREE.SRGBColorSpace;

        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.0;

        this.light.position.set(0, 500, 50);
        this.light2.position.set(-5, 0, 0);

        this.scene.add(this.light);
        this.scene.add(this.light2);
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
        this.outlinePass.edgeStrength = 4;
        this.outlinePass.edgeGlow = 0.1;
        this.outlinePass.edgeThickness = 2;
        this.outlinePass.visibleEdgeColor.set(0xffff00);

        this.composer.addPass(this.outlinePass);

    }

    public async loadModel(objPath: string, mtlPath?: string, texturePath?: string): Promise<THREE.Object3D> {
        const objLoader = new OBJLoader();

        if (mtlPath) {
            const mtlLoader = new MTLLoader();
            const materials = await mtlLoader.loadAsync(mtlPath);
            materials.preload();
            objLoader.setMaterials(materials);
        }

        const object = await objLoader.loadAsync(objPath);

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

        this.mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;

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

        const intersections = this.raycaster.intersectObjects(this._hierarchy, false);
        if (intersections.length > 0) {
            const selected = intersections[0].object as THREE.Mesh;
            this.selectMesh(selected); // <-- Use the same method for consistency
        }
    }

    private animate(): void {
        requestAnimationFrame(() => this.animate());
        this.controls.update();
        this.composer.render();
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
            'assets/objects_and_materials/board/arduino-due-manual.obj',
            'assets/objects_and_materials/board/arduino-due-manual.mtl'
        );
        this.arduino.name = "Arduino Due (Cortex M3)"
        this.arduino.position.set(0, 0, 0);
        this.scene.add(this.arduino);
        this.objects.push(this.arduino);
        this.sceneHierarchy.push(this.arduino);
        this.rebuildHierarchy();
    }

    public async addObject(objectTtile: string, objPath: string, mtlPath?: string, texturePath?: string ): Promise<void> {
        const object = await this.loadModel(objPath, mtlPath, texturePath);
        object.name = objectTtile
        this.scene.add(object);
        this.objects.push(object);
        this.sceneHierarchy.push(object);
        this.rebuildHierarchy();
    }


    get hierarchy(): Mesh[] {
        return this._hierarchy;
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
        this.gui.hide();
        const registersFolder = this.gui.addFolder("Registers");

        (Object.keys(this.registers) as (keyof typeof this.registers)[]).forEach((key) => {
            registersFolder.add(this.registers, key, 0, 1, 1).onChange((value) => {
                this.jsonScript.addTargetToStep(key);
                if (value === 1) {
                    this.jsonScript.addActionToStep("SET");
                } else if (value === 0) {
                    this.jsonScript.addActionToStep("CLEAR");
                }
            });
        });
    }

    private rebuildHierarchy(): void {
        this._hierarchy = [];

        const allObjects = [this.arduino, ...this.objects].filter(Boolean);
        allObjects.forEach(obj => {
            obj.traverse(child => {
                if (child instanceof THREE.Mesh) {
                    this._hierarchy.push(child);
                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();
                    child.layers.enable(1);
                }
            });
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

}
