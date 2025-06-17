import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BlocklyService {

  workspace: any = null;

  constructor() {}

  setWorkspace(worksp) {
    this.workspace = worksp;
  }

}
