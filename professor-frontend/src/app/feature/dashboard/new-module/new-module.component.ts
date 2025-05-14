import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatMenuTrigger } from "@angular/material/menu";
import { JsonScriptService } from "../../../core/service/json-script/json-script.service";
import { GraphicsEngineService } from "../../../core/service/graphics-engine/graphics-engine.service";
import { environment } from "../../../../environments/environment.development";
import {Mesh} from "three";
import * as THREE from 'three';

@Component({
  selector: 'app-new-module',
  templateUrl: './new-module.component.html',
  styleUrls: ['./new-module.component.css']
})
export class NewModuleComponent implements OnInit, AfterViewInit {

  protected wizardFormIsOpened: boolean = false;
  protected actionList: string[] = environment.ACTION;

  @ViewChild('canvas') private canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('matMenuTrigger', { static: true }) matMenuTrigger!: MatMenuTrigger;

  menuTopLeftPosition = { x: '0', y: '0' };

  constructor(
      protected jsonScript: JsonScriptService,
      private graphicsEngine: GraphicsEngineService
  ) {}

  ngOnInit(): void {
    this.openWizardForm();
  }

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.graphicsEngine.init(canvas);
  }

  get hierarchy(): Mesh[] {
    return this.graphicsEngine.hierarchy;
  }

  get hierarchyTree(): THREE.Object3D[] {
    return this.graphicsEngine.hierarchyTree;
  }

  get selectedMesh(): Mesh | null {
    return this.graphicsEngine.selectedMesh;
  }

  selectMesh(obj: THREE.Object3D): void {
    if (obj instanceof THREE.Mesh) {
      this.graphicsEngine.selectMesh(obj);
    }
  }


  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.menuTopLeftPosition.x = `${event.clientX}px`;
    this.menuTopLeftPosition.y = `${event.clientY}px`;
    this.matMenuTrigger.openMenu();
  }

  openWizardForm() {
    this.wizardFormIsOpened = environment.wizardOpenState;
  }

  closeWizardForm(state) {
    this.wizardFormIsOpened = state;
  }

  saveSubtitle(subtitle: string) {
    this.jsonScript.editHeaderSubtitle(subtitle);
  }

  saveAim(aim: string) {
    this.jsonScript.editHeaderAim(aim);
  }

  addRedBlock() {
    this.graphicsEngine.addObject(
        "simple key",
        "assets/objects_and_materials/key/key.obj",
        "assets/objects_and_materials/key/key.mtl",
        "/Users/vladbarto/Documents/FACULTATE/AN4/LICENTA/ar-microcontroller-e.learning/professor-frontend/src/assets/jag-texture.png"
    );
  }

  addGreenBlock() {
    this.graphicsEngine.addObject(
        "key matrix",
        "assets/objects_and_materials/keymatrix/keymatrix.obj",
        "assets/objects_and_materials/keymatrix/keymatrix.mtl",
        "/Users/vladbarto/Documents/FACULTATE/AN4/LICENTA/ar-microcontroller-e.learning/professor-frontend/src/assets/jag-texture.png"
    );
  }

}
