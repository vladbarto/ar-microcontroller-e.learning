import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginModel} from "../../../shared/models/login.model";
import {Observable} from "rxjs";
import {RegisterModel} from "../../../shared/models/register.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: LoginModel): Observable<void> {
    console.log("Login request sent");
    return this.http.post<void>('auth/v1/login', credentials);
  }

  register(credentials: RegisterModel): Observable<RegisterModel> {
    console.log("Register request sent");
    return this.http.post<RegisterModel>('user/v1/registration', credentials);
  }
}
