import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PageStepModel} from "../../../shared/models/page-step.model";
import {WizardModel} from "../../../shared/models/wizard.model";
import {WizardService} from "../wizard/wizard.service";

@Injectable({
  providedIn: 'root'
})
export class JsonScriptService {
  private json = {};
  private stepIdx: number;

  private xml: string = '';

  public setBlocklyXml(xml: string): void {
    this.xml = xml;
  }

  public getBlocklyXml(): string {
    return this.xml;
  }

  constructor(
      private http: HttpClient,
      private wizardService: WizardService
  ) {
    this.stepIdx = 1;
    this.json["subtitle"] = '';
    this.json['aim'] = '';
    this.json['pages'] = {};
    this.xml = '';
  }

  public fetchById(id: string) {
    return this.wizardService.getById(id);
  }

  public load(model: WizardModel): void {
    this.json = {
      subtitle: model.subtitle || '',
      aim: model.aim || '',
      pages: {}
    };

    if (model.pages?.length) {
      model.pages.forEach((step, index) => {
        this.json['pages'][(index + 1).toString()] = {
          description: step.description,
          action: step.action,
          target: step.target
        };
      });
      this.stepIdx = model.pages.length + 1;
    } else {
      this.stepIdx = 1;
    }

    this.xml = ''; // Reset Blockly XML, not persisted
  }


//   manipulate json
  public getNextStepId(): string {
    return (this.stepIdx++).toString();
  }

  public resetPages(): void {
    this.json['pages'] = {};
    this.stepIdx = 1;
  }

  public editHeaderSubtitle(subtitle: string) {
    if (subtitle || subtitle.length > 0) {
      this.json['subtitle'] = subtitle;
    }
  }

  public editHeaderAim(aim: string) {
    if(aim || aim.length > 0) {
      this.json['aim'] = aim;
    }
  }

  public addStep(): string {
    const stepId = this.getNextStepId();
    this.json['pages'][stepId] = {};
    return stepId;
  }

  public putStep(id: string, page: PageStepModel): void {
    this.json['pages'][id] = page;
  }

  public increaseStep() {
    this.stepIdx ++;
  }

  public addTargetToStep(objectName: string) {
    const stepKey = (this.stepIdx - 1).toString();
    if (!this.json['pages'][stepKey])
      return;

    this.json['pages'][stepKey]['target'] = objectName;
  }

  public addDescriptionToStep(description: string ) {
    this.json['pages'][this.stepIdx-1]['description'] = description;
  }

  public addActionToStep(action: string ) {
    this.json['pages'][this.stepIdx-1]['action'] = action.toUpperCase();
  }

  public getSubtitle(): string {
    return this.json['subtitle'];
  }

  public getJson(): any {
    return JSON.stringify(this.json, null, 2);
  }

  public getRawJson(): any {
    return this.json;
  }

  public replaceStepsFromBlockSync(pages: Record<string, PageStepModel>) {
    this.json['pages'] = pages;
  }

  public resetAll(): void {
    this.xml = '';
    this.json['pages'] = [];
    this.json['subtitle'] = '';
    this.json['aim'] = '';
  }

//   send to backend

  public sendToBackend(): Observable<any> {
    return this.http.post<any>(`json/v1/save`, JSON.stringify(this.json));
  }

  public sendToBackendAsUpdate(id: string): Observable<any> {
    return this.http.put<any>(`json/v1/${id}`, JSON.stringify(this.json));
  }

  public setStepIndex(value: number) {
    this.stepIdx = value;
  }
}
