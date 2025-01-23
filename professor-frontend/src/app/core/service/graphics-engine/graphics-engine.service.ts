import {ElementRef, Injectable, ViewChild} from '@angular/core';
import * as THREE from "three";

@Injectable({
  providedIn: 'root'
})
export class GraphicsEngineService {

  // TODO: implement pt mai multa modularizare
  // @ViewChild('canvas')
  // private canvasRef: ElementRef;
  // private camera!: THREE.PerspectiveCamera;
  //
  // private get canvas() : HTMLCanvasElement {
  //   return this.canvasRef.nativeElement;
  // }
  //
  // private loader = new THREE.TextureLoader();
  // private geometry = new THREE.BoxGeometry(1,1,1);
  // private material = new THREE.MeshBasicMaterial({map: this.loader.load(this.texture)});
  // private cube : THREE.Mesh = new THREE.Mesh(this.geometry, this.material);
  // private renderer! : THREE.WebGLRenderer;
  // private scene! : THREE.Scene;

}
