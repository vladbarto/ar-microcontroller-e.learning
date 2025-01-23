import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../../shared/models/user.model";
import {BrowserStorageService} from "../../../core/service/browserStorage/browser-storage.service";
import {Router} from "@angular/router";
import {LearningModuleModel} from "../../../shared/models/learning-module.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
  protected loggedUser: UserModel = {email: "", id: "", role: ""};
  protected editMode: boolean = false;
  protected learningModules: LearningModuleModel[] = [];

  constructor(
    private browserStorage: BrowserStorageService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loggedUser = this.browserStorage.getUser();
    console.log(this.loggedUser);
  }

  protected logOut() {
    this.browserStorage.logOut();
  }

  protected goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
