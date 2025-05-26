import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
