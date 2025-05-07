import {Component, Input} from '@angular/core';
import {WizardModel} from "../../../../shared/models/wizard.model";

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrl: './material-card.component.css'
})
export class MaterialCardComponent {
  @Input() learningModule!: WizardModel;
}
