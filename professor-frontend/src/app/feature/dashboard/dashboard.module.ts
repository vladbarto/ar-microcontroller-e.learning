import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {ChefsComponent} from "./chefs/chefs.component";
import {ChefComponent} from "./chef/chef.component";
import {FormsModule} from "@angular/forms";
import {ChefCardComponent} from "./chefs/chef-card/chef-card.component";
import { HomeComponent } from './home/home.component';
import { MaterialCardComponent } from './home/material-card/material-card.component';
import { NewModuleComponent } from './new-module/new-module.component';



@NgModule({
  declarations: [
    ChefsComponent,
    ChefComponent,
    ChefCardComponent,
    HomeComponent,
    MaterialCardComponent,
    NewModuleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
