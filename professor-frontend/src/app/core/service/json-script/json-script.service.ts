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
  }

//   manipulate json

  public createJsonScriptFile() {
    this.json = {};
    this.stepIdx = 1;
  }

  public addStep() {
    this.json[this.stepIdx] = {};
  }

  public increaseStep() {
    this.stepIdx ++;
  }

  public addAimedComponentToStep(objectName: string) {
    if (!this.json[this.stepIdx]) {
      this.addStep(); // Ensure step exists before adding data
    }

    this.json[this.stepIdx]['aimed_component'] = objectName;
    console.log(this.json);
  }

  public getJson(): any {
    return JSON.stringify(this.json);
  }

//   send to backend

  public sendToBackend(): Observable<any> {
    return this.http.post<any>(`json/v1/save`, JSON.stringify(this.json));
  }
}
