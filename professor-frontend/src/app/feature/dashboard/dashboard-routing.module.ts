import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "../../shared/components/not-found/not-found.component";
import {adminGuard, userGuard} from "../../core/guard/authorization.guard";
import {InvalidAccessComponent} from "../../shared/components/invalid-access/invalid-access.component";
import {HomeComponent} from "./home/home.component";
import {NewModuleComponent} from "./new-module/new-module.component";


export const routes: Routes = [
  {
    path: 'home',
    canActivate: [adminGuard], //[adminGuard, userGuard] -> atm only admins will be connected, so that's a quickfix
    component: HomeComponent //before: ChefsComponent
  },
  {
    path: 'new-module',
    canActivate: [adminGuard],
    component: NewModuleComponent
  },
  {
    path: 'invalid-access',
    component: InvalidAccessComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
