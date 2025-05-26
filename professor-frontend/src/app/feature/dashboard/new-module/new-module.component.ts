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
import {Router} from "@angular/router";
import * as Blockly from 'blockly';
import {NgxBlocklyComponent} from "ngx-blockly";



@Component({
  selector: 'app-new-module',
  templateUrl: './new-module.component.html',
  styleUrls: ['./new-module.component.css']
})
export class NewModuleComponent implements OnInit, AfterViewInit {

  protected wizardFormIsOpened: boolean = false;
  protected actionList: string[] = environment.ACTION;
  @ViewChild('blockly') blocklyComponent!: NgxBlocklyComponent;

  blocklyConfig = {
    toolbox: {
      kind: 'flyoutToolbox',
      contents: [
        {
          kind: 'block',
          type: 'step_block'
        }
      ]
    },
    scrollbars: true,
    trashcan: true,
    collapse: false,
    comments: false,
    disable: false,
  };


  startBlocksXml = ''; // optional: can preload from jsonScript if needed

  @ViewChild('canvas') private canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('matMenuTrigger', { static: true }) matMenuTrigger!: MatMenuTrigger;

  menuTopLeftPosition = { x: '0', y: '0' };

  constructor(
      protected jsonScript: JsonScriptService,
      private graphicsEngine: GraphicsEngineService,
      private router: Router
  ) {

    Blockly.Blocks['step_block'] = {
      init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldTextInput("step"), "TXT");
        this.setColour(230);
        this.setOutput(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
      }
    };

  }

  ngOnInit(): void {
    this.openWizardForm();
  }

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.graphicsEngine.init(canvas);

    const workspace = this.blocklyComponent.workspace;
    this.loadStepsToWorkspace(workspace);
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

  protected goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  protected download(): void {
    console.log('"download" script');

    const content = this.jsonScript.getJson();
    const filename = `${this.jsonScript.getSubtitle()}.txt`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
  }

  protected printAngle() {
    this.graphicsEngine.printAngle();
  }

  onWorkspaceChange() {
    const workspace = this.blocklyComponent.workspace;
    const blocks = workspace.getTopBlocks(true);
    const steps = blocks.map((block, idx) => ({
      id: idx + 1,
      text: block.getFieldValue('TXT')
    }));
    this.jsonScript.replaceSteps(steps);
  }


  loadStepsToWorkspace(workspace: Blockly.WorkspaceSvg) {
    const json = this.jsonScript.getJson();
    const pages = json.pages;

    Object.entries(pages)
        .forEach(([_, step], idx) => {
          const stepData = step as { description?: string };
          const block = workspace.newBlock('step_block');
          block.setFieldValue(stepData.description || 'step', 'TXT');
          block.initSvg();
          block.render();
          block.moveBy(10, 40 * idx);
        });
  }


}
