import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WizardModel} from "../../../shared/models/wizard.model";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  // endpoints
  baseUrl: string;
  endpoints;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.WIZARD.base;
    this.endpoints = environment.WIZARD;
  }

  public getAllMain(): Observable<WizardModel[]> {
    return this.http.get<WizardModel[]>(`${this.baseUrl}/${this.endpoints.allMain}`);
  }
}
