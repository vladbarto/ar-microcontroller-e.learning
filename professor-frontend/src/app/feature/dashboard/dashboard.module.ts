import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { MaterialCardComponent } from './home/material-card/material-card.component';
import { NewModuleComponent } from './new-module/new-module.component';
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import { WizardFormComponent } from './new-module/wizard-form/wizard-form.component';
import { InspectorNodeComponent } from './new-module/inspector-node/inspector-node.component';
import {NgxBlocklyModule} from "ngx-blockly";



@NgModule({
  declarations: [
    HomeComponent,
    MaterialCardComponent,
    NewModuleComponent,
    WizardFormComponent,
    InspectorNodeComponent,
  ],
    imports: [
        CommonModule,
        SharedModule,
        DashboardRoutingModule,
        FormsModule,
        MatMenuTrigger,
        MatMenu,
        ReactiveFormsModule,
        NgxBlocklyModule
    ]
})
export class DashboardModule { }
