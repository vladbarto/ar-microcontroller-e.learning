import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {JsonScriptService} from "../../../core/service/json-script/json-script.service";
import GUI from "three/examples/jsm/libs/lil-gui.module.min";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';


@Component({
  selector: 'app-new-module',
  templateUrl: './new-module.component.html',
  styleUrl: './new-module.component.css'
})
export class NewModuleComponent implements OnInit, AfterViewInit {

  constructor(
      protected jsonScript: JsonScriptService
  ) {}

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  @Input() public size: number = 200;
  @Input() public texture: string = 'assets/jag-texture.png';
  @Input() public cameraZ: number = 400;
  @Input() public fieldOfView: number = 1;
  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 1000;

  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;

  private get canvas() : HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private renderer! : THREE.WebGLRenderer;
  private scene! : THREE.Scene;
  private arduino! : THREE.Object3D;
  public hierarchy: THREE.Mesh[] = [];

  // Add a basic light
  private light = new THREE.DirectionalLight(0xffffff, 1);

  //create oXYZ guidelines
  private oxMaterial = new THREE.LineBasicMaterial( { color: 0xff0000 } );
  private pointsOx = [];
  private oyMaterial = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
  private pointsOy = [];
  private ozMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
  private pointsOz = [];

  // object selection: a solution based on Raycaster
  private raycaster = new THREE.Raycaster();

  // object selection: a second solution based on selecting objects from Inspector
  selectedMesh: THREE.Mesh | null = null;
  private composer!: EffectComposer;
  private outlinePass!: OutlinePass;

  private createPostProcessing() {
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));

    this.outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), this.scene, this.camera);
    this.outlinePass.edgeStrength = 4;  // Thickness of outline
    this.outlinePass.edgeGlow = 0.1;
    this.outlinePass.edgeThickness = 2;
    this.outlinePass.visibleEdgeColor.set(0xffff00);  // Highlight color (yellow)
    this.composer.addPass(this.outlinePass);
  }

  selectMesh(mesh: THREE.Mesh) {
    this.selectedMesh = mesh;
    this.applyOutlineEffect(mesh);
  }

  // menus: GUI
  private gui = new GUI();
  private PIO_PER = 0;
  private registers = {
    // myBoolean: true,
    // myFunction: function() { ... },
    // myString: 'lil-gui',
    // myNumber: 1
    PIO_PER: 0,
    PIO_OER: 0,
    PIO_SODR: 0
  };
  /**
   * Create the GUI for the chip
   *
   * @private
   */
  private createGui() {
    this.gui.hide();
    const registers = this.gui.addFolder("Registers");
    registers.add(this.registers, 'PIO_PER', 0, 1, 1);
    registers.add(this.registers, 'PIO_OER', 0, 1, 1);
    registers.add(this.registers, 'PIO_SODR', 0, 1, 1);

    // registers.add("PIO_OER");
    // registers.add("PIO_SODR");
  }

  /**
   * Create the scene
   *
   * @private
   * @memberof: CubeComponent
   */
  private createScene() {
    //* Scene
    this.createGui();
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    // this.scene.add(this.cube);
    this.loadObjWithMaterials(
        'assets/objects_and_materials/arduino-due.obj',
        'assets/objects_and_materials/arduino-due.mtl',
        'assets/objects_and_materials/arduino-due.jpg'
    )
        .then((object) => {
          this.arduino = object;

          // Apply transformations
          //this.arduino.scale.set(.1, .1, .1); // Set scale
          this.arduino.position.set(0, 0, 0); // Center the object
          this.scene.add(this.arduino); // Add the object to the scene
          console.log('Model added to the scene and ready for manipulation');
        })
        .catch((error) => {
          console.error('Error loading model:', error);
        });

    this.light.position.set(5, 10, 7.5);
    this.scene.add(this.light);

    this.pointsOx.push( new THREE.Vector3( 0, 0, 0 ) );
    this.pointsOx.push( new THREE.Vector3( 10, 0, 0 ) );
    const geometryOx = new THREE.BufferGeometry().setFromPoints( this.pointsOx );
    const lineOx = new THREE.Line( geometryOx, this.oxMaterial );

    this.pointsOy.push( new THREE.Vector3(0, 0, 0));
    this.pointsOy.push( new THREE.Vector3(0, 10, 0));
    const geometryOy = new THREE.BufferGeometry().setFromPoints( this.pointsOy );
    const lineOy = new THREE.Line( geometryOy, this.oyMaterial );

    this.pointsOz.push( new THREE.Vector3(0, 0, 0));
    this.pointsOz.push( new THREE.Vector3(0, 0, 10));
    const geometryOz = new THREE.BufferGeometry().setFromPoints( this.pointsOz );
    const lineOz = new THREE.Line( geometryOz, this.ozMaterial );

    this.scene.add(lineOx); this.scene.add(lineOy); this.scene.add(lineOz);
    // this.material.wireframe = true;
    //* Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera (
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    this.camera.position.z = this.cameraZ;

    // Initialize OrbitControls
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;  // Smooth controls
    this.controls.dampingFactor = 0.05;
    this.controls.rotateSpeed = 0.1;
    this.controls.enableZoom = true;
    this.controls.autoRotate = false;  // Disable automatic rotation, we'll handle it manually
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
   * Start the rendering loop
   *
   * @private
   */
  // private startRenderingLoop() {
  //   //* Renderer
  //   // Use canvas element in template
  //   this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
  //   this.renderer.setPixelRatio(devicePixelRatio);
  //   this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  //
  //   // this.raycaster.layers.set(1);
  //   this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
  //
  //   let component: NewModuleComponent = this;
  //   (function render() {
  //     requestAnimationFrame(render);
  //     component.renderer.render(component.scene, component.camera);
  //   }());
  // }
  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    this.createPostProcessing(); // Initialize post-processing

    this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));

    let component: NewModuleComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.composer.render();  // Use composer instead of renderer for effects
    }());
  }
  // Select Mesh and Apply Outline
  private applyOutlineEffect(mesh: THREE.Mesh) {
    this.outlinePass.selectedObjects = [mesh];
    console.log(this.selectedMesh);
  }

  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();
  }

  ngOnInit(): void {}

  private angleX = 0;
  private angleY = 0;
  private angleZ = 0;
  // ----------------------------------------------------------
  // Camera rotation around axis
  @HostListener('document:keydown.enter', ['$event'])
  private cameraOrbitY() {
    this.angleY += 0.09;  // Adjust speed of rotation here (lower for slower)

    const radius = 400;  // Distance from the object
    const x = radius * Math.sin(this.angleY);
    const z = radius * Math.cos(this.angleY);

    this.camera.position.set(x, this.camera.position.y, z);
    this.camera.lookAt(this.scene.position);
  }

  @HostListener('document:keydown.arrowdown', ['$event'])
  private cameraOrbitX_plus() {
    this.angleX += 0.09;  // Adjust speed of rotation here (lower for slower)

    const radius = 400;  // Distance from the object
    const y = radius * Math.sin(this.angleX);
    const z = radius * Math.cos(this.angleX);

    this.camera.position.set(this.camera.position.x, y, z);
    this.camera.lookAt(this.scene.position);
  }

  @HostListener('document:keydown.arrowup', ['$event'])
  private cameraOrbitX_minus() {
    this.angleX -= 0.09;  // Adjust speed of rotation here (lower for slower)

    const radius = 400;  // Distance from the object
    const y = radius * Math.sin(this.angleX);
    const z = radius * Math.cos(this.angleX);

    this.camera.position.set(this.camera.position.x, y, z);
    this.camera.lookAt(this.scene.position);
  }

  @HostListener('document:keydown.arrowright', ['$event'])
  private cameraOrbitZ_plus() {
    this.angleZ += 0.09;  // Adjust speed of rotation here (lower for slower)

    const radius = 400;  // Distance from the object
    const x = radius * Math.sin(this.angleZ);
    const y = radius * Math.cos(this.angleZ);

    this.camera.position.set(x, y, this.camera.position.z);
    this.camera.lookAt(this.scene.position);
  }

  @HostListener('document:keydown.arrowleft', ['$event'])
  private cameraOrbitZ_minus() {
    this.angleZ -= 0.09;  // Adjust speed of rotation here (lower for slower)

    const radius = 400;  // Distance from the object
    const x = radius * Math.sin(this.angleZ);
    const y = radius * Math.cos(this.angleZ);

    this.camera.position.set(x, y, this.camera.position.z);
    this.camera.lookAt(this.scene.position);
  }

  private loadObjWithMaterials(objPath: string, mtlPath: string, texturePath: string): Promise<THREE.Object3D> {
    return new Promise((resolve, reject) => {
      const mtlLoader = new MTLLoader();
      mtlLoader.load(
          mtlPath,
          (materials) => {
            materials.preload();

            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load(
                objPath,
                (object) => {
                  // Apply texture to the object
                  const textureLoader = new THREE.TextureLoader();
                  const texture = textureLoader.load(texturePath);

                  // Traverse the object's children and apply the texture to each mesh
                  object.traverse((child) => {
                    if ((child as THREE.Mesh).isMesh) {
                      const mesh = child as THREE.Mesh;
                      if (mesh.material && Array.isArray(mesh.material)) {
                        // If the material is an array (multi-material), apply the texture to each
                        mesh.material.forEach((material) => {
                          if (material instanceof THREE.MeshStandardMaterial) {
                            material.map = texture;
                            material.needsUpdate = true; // Notify Three.js that the material has been updated
                          }
                        });
                      } else if (mesh.material instanceof THREE.MeshStandardMaterial) {
                        // Single material
                        mesh.material.map = texture;
                        mesh.material.needsUpdate = true;
                      }
                    }
                  });

                  resolve(object); // Resolve the promise with the loaded object
                },
                (xhr) => {
                  console.log(`Model ${Math.round((xhr.loaded / xhr.total) * 100)}% loaded`);
                },
                (error) => {
                  reject(`An error occurred while loading the model: ${error}`);
                }
            );
          },
          undefined,
          (error) => {
            reject(`An error occurred while loading materials: ${error}`);
          }
      );
    });
  }

 // raycaster components
  private onMouseDown(event) {
    this.gui.show();
    const coords = new THREE.Vector2(
        (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1,
        (event.clientY / this.renderer.domElement.clientHeight) * 2 - 1
    );

    this.controls.update();  // if using OrbitControls
    this.camera.updateMatrixWorld();
    this.raycaster.setFromCamera(coords, this.camera);
    this.jsonScript.addAimedComponentToStep("some name" + Math.random());
    this.jsonScript.getJson();
    if(this.arduino) {
      this.hierarchy = [];

      // get all child meshes
      this.arduino.traverse((child) => {
        // if ((child as THREE.Mesh).isMesh) {
        if (child instanceof THREE.Mesh) {
          this.hierarchy.push(child as THREE.Mesh);
          child.castShadow = true;
          child.receiveShadow = true;
          child.raycast = THREE.Mesh.prototype.raycast;
          child.geometry.computeBoundingSphere();
          child.geometry.computeBoundingBox();
          child.layers.enable(1);
          this.camera.layers.enable(1);
          this.raycaster.layers.enable(1);
        }
      })
      console.warn(this.hierarchy);
    }

    const intersections = this.raycaster.intersectObjects(this.hierarchy, false);
    if(intersections.length > 0) {
      const selectedObject = intersections.at(0).object as THREE.Mesh;
      // const color = new THREE.Color(Math.random(), Math.random(), Math.random());
      this.renderer.render(this.scene, this.camera);
      console.log(intersections[0].object.name, " was clicked!");

      // this.jsonScript.addAimedComponentToStep(selectedObject.name);
    } else {
      console.error('no intersections detected');
    }
  }
}
