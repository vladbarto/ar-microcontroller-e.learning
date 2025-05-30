import {Component, DestroyRef, OnInit} from '@angular/core';
import {UserModel} from "../../../shared/models/user.model";
import {BrowserStorageService} from "../../../core/service/browserStorage/browser-storage.service";
import {Router} from "@angular/router";
import {WizardModel} from "../../../shared/models/wizard.model";
import {JsonScriptService} from "../../../core/service/json-script/json-script.service";
import {WizardService} from "../../../core/service/wizard/wizard.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
  protected loggedUser: UserModel = {email: "", id: "", role: ""};
  protected editMode: boolean = false;
  protected learningModules: WizardModel[] = [];

  constructor(
    private browserStorage: BrowserStorageService,
    private router: Router,
    private jsonScript: JsonScriptService,
    private wizardService: WizardService,
    private destroyRef: DestroyRef
  ) {
  }

  ngOnInit() {
    this.loggedUser = this.browserStorage.getUser();
    console.log(this.loggedUser);
    this.fetchMaterials();
  }

  protected logOut() {
    this.browserStorage.logOut();
  }

  protected goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  private fetchMaterials() {
    this.wizardService.getAllMain()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: response => this.learningModules = response, error: err => console.error(err),
        });
  }

  openEditor(id: string) {
    this.router.navigate(['dashboard/editor'], {queryParams: {id} });
  }
}
