import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../../../shared/models/user.model";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // endpoints
  baseUrl: string;
  endpoints;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.USER.base;
    this.endpoints = environment.USER;
  }

  getInfo(): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.baseUrl}/${this.endpoints.info}`);
  }
}
