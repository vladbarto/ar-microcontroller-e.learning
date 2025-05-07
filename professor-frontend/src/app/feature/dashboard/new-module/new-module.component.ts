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

  get selectedMesh(): Mesh | null {
    return this.graphicsEngine.selectedMesh;
  }

  selectMesh(mesh: Mesh): void {
    this.graphicsEngine.selectMesh(mesh);
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

  // Optional hooks if needed:
  // addRedBlock() {
  //   this.graphicsEngine.addObject(this.graphicsEngine.cloneArduino());
  // }

}
