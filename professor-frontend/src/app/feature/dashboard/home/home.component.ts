import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../../shared/models/user.model";
import {BrowserStorageService} from "../../../core/service/browserStorage/browser-storage.service";
import {Router} from "@angular/router";
import {LearningModuleModel} from "../../../shared/models/learning-module.model";
import {JsonScriptService} from "../../../core/service/json-script/json-script.service";

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
    private router: Router,
    private jsonScript: JsonScriptService
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

  protected createScript() {
    this.jsonScript.createJsonScriptFile();
  }
}
