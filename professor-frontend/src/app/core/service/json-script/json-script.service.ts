import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JsonScriptService {
  private json = {};
  private stepIdx: number;

  constructor(
      private http: HttpClient
  ) {
    this.stepIdx = 1;
    this.json["subtitle"] = '';
    this.json['aim'] = '';
    this.json['pages'] = {};
  }

//   manipulate json

  public editHeaderSubtitle(subtitle: string) {
    if(null != subtitle || 0 < subtitle.length)
      this.json['subtitle'] = subtitle;
  }

  public editHeaderAim(aim: string) {
    if(null != aim || 0 < aim.length)
      this.json['aim'] = aim;
  }

  public addStep() {
    this.json['pages'][this.stepIdx] = {};
  }

  public increaseStep() {
    this.stepIdx ++;
  }

  public addTargetToStep(objectName: string) {
    this.json['pages'][this.stepIdx-1]['target'] = objectName;
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

  public replaceSteps(newSteps: { id: number, text: string }[]) {
    const updatedPages: Record<string, any> = {};

    newSteps.forEach(step => {
      const existing = this.json['pages'][step.id.toString()] || {};
      updatedPages[step.id.toString()] = {
        ...existing,
        description: step.text
      };
    });

    this.json['pages'] = updatedPages;
  }

//   send to backend

  public sendToBackend(): Observable<any> {
    return this.http.post<any>(`json/v1/save`, JSON.stringify(this.json));
  }
}
