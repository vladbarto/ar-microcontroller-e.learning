import {
  AfterViewInit,
  Component,
  ElementRef, OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatMenuTrigger } from "@angular/material/menu";
import { JsonScriptService } from "../../../core/service/json-script/json-script.service";
import { GraphicsEngineService } from "../../../core/service/graphics-engine/graphics-engine.service";
import { environment } from "../../../../environments/environment.development";
import {Mesh} from "three";
import * as THREE from 'three';
import {ActivatedRoute, Router} from "@angular/router";
import * as Blockly from 'blockly';
import {NgxBlocklyComponent} from "ngx-blockly";
import {PageStepModel} from "../../../shared/models/page-step.model";
import {WizardModel} from "../../../shared/models/wizard.model";
import {BlocklyService} from "../../../core/service/blockly-engine/blockly.service";


@Component({
  selector: 'app-new-module',
  templateUrl: './new-module.component.html',
  styleUrls: ['./new-module.component.css']
})
export class NewModuleComponent implements OnInit, AfterViewInit, OnDestroy {

  protected successMessage: string = '';
  protected wizardFormIsOpened: boolean = false;
  protected actionList: string[] = environment.ACTION;
  @ViewChild('blockly') blocklyComponent!: NgxBlocklyComponent;

  protected editingId: string = null;

  blocklyConfig = {
    toolbox: {
      kind: 'flyoutToolbox',
      contents: [
        { kind: 'block', type: 'step_block' },
        { kind: 'block', type: 'target_block' }
      ]
    },
    generators: [],
    horizontalLayout: true,
    scrollbars: true,
    trashcan: false,
    collapse: false,
    comments: false,
    disable: false,
    zoom: {
      controls: true,
      wheel: true,
      minScale: .4,
      maxScale: 1.5
    }
  };

  @ViewChild('canvas') private canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('matMenuTrigger', { static: true }) matMenuTrigger!: MatMenuTrigger;

  menuTopLeftPosition = { x: '0', y: '0' };
  editingMode: 'manual' | 'blockly' = 'blockly';

  constructor(
      protected jsonScript: JsonScriptService,
      private graphicsEngine: GraphicsEngineService,
      private blocklyService: BlocklyService,
      private router: Router,
      private route: ActivatedRoute
  ) {



    const actionOptions: [string, string][] = this.actionList.map(a => [a.toUpperCase(), a.toUpperCase()]);

    Blockly.Blocks['step_block'] = {
      init: function () {
        this.appendDummyInput()
            .appendField("Step");

        this.appendDummyInput()
            .appendField("Description")
            .appendField(new Blockly.FieldMultilineInput("..."), "description");

        this.appendDummyInput()
            .appendField("Action")
            .appendField(new Blockly.FieldDropdown(actionOptions), "action");

        this.appendValueInput('Target')
            .setCheck('Target')
            .appendField('Target');

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Defines a step");
        this.setHelpUrl("");
      }
    };

    Blockly.Blocks['target_block'] = {
      init() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldLabelSerializable('COMP'), 'targetName');
        this.setOutput(true, 'Target');          // plugs into step_block.target
        this.setColour(120);
      }
    };
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.jsonScript.fetchById(id).subscribe((data: WizardModel) => {
          this.jsonScript.load(data); // assuming this stores raw JSON + XML
          this.openWizardForm();
          this.switchToBlocklyMode(); // delay if necessary until workspace ready
          this.editingId = id;
        });
      } else {
        this.openWizardForm(); // fallback for blank creation
        this.editingId = null;
      }
    });

    this.graphicsEngine.setWorkspaceRef(this.getWorkspace.bind(this));
  }

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.graphicsEngine.init(canvas);

    const ws = this.blocklyComponent.workspace;

    // Load workspace XML from jsonScript on init
    const xmlText = this.jsonScript.getBlocklyXml();
    if (xmlText?.trim()) {
      const xml = Blockly.Xml.textToDom(xmlText);
      Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, ws);
    } else {
      this.loadStepsToWorkspace(ws);
    }

    this.onWorkspaceChange();  // force sync to jsonScript
    // this.blocklyRegister();
    this.blocklyService.setWorkspace(ws);
  }

  ngOnDestroy() {
    this.graphicsEngine.ngOnDestroy();
    this.jsonScript.resetAll();
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

  /* NewModuleComponent --------------------------------------------- */
  onWorkspaceChange(): void {
    const ws = this.blocklyComponent?.workspace;
    if (!ws) return;

    /* -------- 1. Serialize blocks to JSON.pages -------- */
    const pages: Record<string, PageStepModel> = {};

    // walk only the connected chain that starts with the first top block
    let blk = ws.getTopBlocks(true)
        .find(b => b.getPreviousBlock() === null) as Blockly.BlockSvg | undefined;

    let index = 1;
    while (blk) {
      const tgtInput = blk.getInput('Target')?.connection?.targetBlock() as Blockly.BlockSvg | null;
      pages[index.toString()] = {
        description: blk.getFieldValue('description') || undefined,
        action:      blk.getFieldValue('action')      || undefined,
        target:      tgtInput?.getFieldValue('targetName') || undefined
      };
      blk = blk.getNextBlock() as Blockly.BlockSvg | null;
      index++;
    }

    this.jsonScript.resetPages();
    Object.entries(pages).forEach(([id, page]) => this.jsonScript.putStep(id, page));

    /* -------- 2. Save Blockly XML (optional persistence) -------- */
    const xmlText = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(ws));
    this.jsonScript.setBlocklyXml(xmlText);          // already defined earlier
  }

  addTargetToCurrentStep() {
    if (!this.selectedMesh) return;

    this.jsonScript.addTargetToStep(this.selectedMesh.name);
    this.createBlockWithTarget(this.selectedMesh.name);
  }

  switchToManualMode(): void {
    const ws = this.blocklyComponent.workspace;

    if (ws) {
      const xml = Blockly.Xml.workspaceToDom(ws);
      const xmlText = Blockly.Xml.domToText(xml);
      this.jsonScript.setBlocklyXml(xmlText);
      const stepBlocks = ws.getAllBlocks(false)
          .filter(block => block.type === 'step_block')
      this.jsonScript.setStepIndex(stepBlocks.length);
    }

    this.editingMode = 'manual';
  }

  switchToBlocklyMode(): void {
    this.editingMode = 'blockly';

    if (!this.blocklyComponent) {
      setTimeout(() => this.switchToBlocklyMode(), 100);
      return;
    }
    if (!this.blocklyComponent.workspace) {
      setTimeout(() => this.switchToBlocklyMode(), 100);
      return;
    }

    const ws = this.blocklyComponent.workspace;
    const xmlText = this.jsonScript.getBlocklyXml();

    if (xmlText?.trim()) {
      const xml = Blockly.Xml.textToDom(xmlText);
      Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, ws);
    } else {
      this.loadStepsToWorkspace(ws); // fallback to JSON structure
    }
  }

  private createBlockWithTarget(target: string): void {
    const workspace = this.blocklyComponent.workspace;

    const stepBlock = workspace.newBlock('step_block') as Blockly.BlockSvg;
    const targetBlock = workspace.newBlock('target_block') as Blockly.BlockSvg;

    targetBlock.setFieldValue(target, 'targetName');

    stepBlock.initSvg(); stepBlock.render();
    targetBlock.initSvg(); targetBlock.render();

    const y = workspace.getAllBlocks(false).length * 50;
    stepBlock.moveBy(10, y);
    targetBlock.moveBy(150, y); // avoid overlap

    const targetInput = stepBlock.getInput('Target');
    if (targetInput?.connection && targetBlock.outputConnection) {
      targetInput.connection.connect(targetBlock.outputConnection);
    }

    this.blocklyComponent.workspace.render();
    this.onWorkspaceChange();
  }

  addTargetToInventory(): void {
    const workspace = this.blocklyComponent.workspace;
    const targetBlock = workspace.newBlock('target_block') as Blockly.BlockSvg;
    targetBlock.setFieldValue(this.selectedMesh.name, 'targetName');
    targetBlock.initSvg();
    targetBlock.render();
    targetBlock.moveBy(400, 0); // Position to the side
  }

  loadStepsToWorkspace(ws: Blockly.WorkspaceSvg): void {
    const pages = (this.jsonScript.getRawJson().pages ?? {}) as Record<string, PageStepModel>;

    ws.clear();
    let previous: Blockly.BlockSvg | null = null;

    Object.entries(pages)
        .sort(([a], [b]) => +a - +b)              // 1,2,3…
        .forEach(([_, data]) => {
          const step = ws.newBlock('step_block') as Blockly.BlockSvg;
          step.setFieldValue(data.description ?? '', 'description');
          step.setFieldValue(data.action      ?? '', 'action');

          if (data.target) {                      // recreate target child
            const tgt = ws.newBlock('target_block') as Blockly.BlockSvg;
            tgt.setFieldValue(data.target, 'targetName');
            tgt.initSvg(); tgt.render();
            step.getInput('Target')?.connection
                ?.connect(tgt.outputConnection);
          }

          step.initSvg(); step.render();
          if (previous) previous.nextConnection?.connect(step.previousConnection);
          else step.moveBy(10, 40);
          previous = step;
        });
  }

  blocklyRegister() {
    Blockly.ContextMenuRegistry.registry.register({
      displayText: () => 'Add Target Block',
      preconditionFn: (scope) => {
        return 'enabled'; // Show always
      },
      callback: (scope) => {
        const workspace = this.blocklyComponent.workspace
        const block = workspace.newBlock('target_block') as Blockly.BlockSvg;
        block.setFieldValue('dummyTarget', 'targetName');
        block.initSvg();
        block.render();

        const count = workspace.getAllBlocks(false).length;
        block.moveBy(10 + (count * 10), 10 + (count * 10)); // offset position

        workspace.render();
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
      id: 'add_target_block',
      weight: 100,
    });

  }

  sendToBackend() {
    this.jsonScript.sendToBackend().subscribe({
      next: () => {
        this.successMessage = 'Your learning module has been saved on server';
        setTimeout(() => {
          this.successMessage = undefined;
          this.goToPage('dashboard/home')
        }, 3000);
      }
    });
  }

  sendToBackendAsUpdate() {
    this.jsonScript.sendToBackendAsUpdate(this.editingId).subscribe({
      next: () => {
        this.successMessage = 'Your learning module has been updated on server';
        setTimeout(() => {
          this.successMessage = undefined;
        }, 3000);
      }
    });
  }

  public getWorkspace(): Blockly.WorkspaceSvg {
    return this.blocklyComponent.workspace;
  }
}
