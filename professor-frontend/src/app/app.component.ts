import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BrowserStorageService} from "./core/service/browserStorage/browser-storage.service";
import {environment} from "../environments/environment.development";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chef-mgmt-frontend';

  constructor(private browserStorage: BrowserStorageService) {
    if (environment.clearCookies)
      browserStorage.clearCookies();
  }
}
