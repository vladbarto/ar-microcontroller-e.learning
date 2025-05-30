import * as Blockly from 'blockly';
import { Injectable } from '@angular/core';
import {PageStepModel} from "../../../shared/models/page-step.model";

@Injectable({ providedIn: 'root' })
export class BlocklyService {

  workspace: any = null;

  constructor() {}

  public addActionBlock(targetName: string, actionValue: string): void {
    if (!this.workspace) return;

    // Create the step_block
    const stepBlock = this.workspace.newBlock('step_block');

    // Set the action dropdown
    stepBlock.setFieldValue(actionValue, 'action');

    // Initialize block visuals
    stepBlock.initSvg();
    stepBlock.render();

    // Create the target_block and set its name field
    const targetBlock = this.workspace.newBlock('target_block');
    targetBlock.setFieldValue(targetName, 'targetName'); // assuming 'name' is the field for register name
    targetBlock.initSvg();
    targetBlock.render();

    // Connect targetBlock to stepBlock's 'Target' input
    const targetInput = stepBlock.getInput('Target');
    if (targetInput) {
      targetInput.connection.connect(targetBlock.outputConnection);
    }

    // Optionally position the blocks
    const metrics = this.workspace.getMetrics();
    stepBlock.moveBy(metrics.viewLeft + 20, metrics.viewTop + 20);
    targetBlock.moveBy(metrics.viewLeft + 20, metrics.viewTop + 100);

    // Make sure to update the workspace display
    this.workspace.render();
  }

  setWorkspace(worksp) {
    this.workspace = worksp;
  }

}
