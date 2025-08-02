import { Component } from '@angular/core';
import {BrowserStorageService} from "../../../core/service/browserStorage/browser-storage.service";

@Component({
  selector: 'app-invalid-access',
  templateUrl: './invalid-access.component.html',
  styleUrl: './invalid-access.component.css'
})
export class InvalidAccessComponent {

    constructor(private browserStorage: BrowserStorageService) {
    }

    public logout(): void {
        this.browserStorage.logOut();
    }
}
