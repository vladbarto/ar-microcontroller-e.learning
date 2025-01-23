import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";

@Component({
  selector: 'app-new-module',
  templateUrl: './new-module.component.html',
  styleUrl: './new-module.component.css'
})
export class NewModuleComponent implements OnInit, AfterViewInit {

  constructor() {}

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  @Input() public rotationSpeedX: number = 0.05;
  @Input() public rotationSpeedY: number = 0.01;
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

  private loader = new THREE.TextureLoader();
  private geometry = new THREE.BoxGeometry(1,1,1);
  private material = new THREE.MeshBasicMaterial({map: this.loader.load(this.texture)});
  private cube : THREE.Mesh = new THREE.Mesh(this.geometry, this.material);
  private renderer! : THREE.WebGLRenderer;
  private scene! : THREE.Scene;

  //create oXYZ guidelines
  private oxMaterial = new THREE.LineBasicMaterial( { color: 0xff0000 } );
  private pointsOx = [];
  private oyMaterial = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
  private pointsOy = [];
  private ozMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
  private pointsOz = [];
  /**
   * Create the scene
   *
   * @private
   * @memberof: CubeComponent
   */
  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    this.scene.add(this.cube);

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
   * Animate the cube
   *
   * @private
   * @memberof CubeComponent
   */
  private animateCube() {
    // this.cube.rotation.x += this.rotationSpeedX;
    // this.cube.rotation.y += this.rotationSpeedY;
  }

  /**
   * Start the rendering loop
   *
   * @private
   */
  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: NewModuleComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
  }

  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();
  }

  ngOnInit(): void {

  }

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


}
