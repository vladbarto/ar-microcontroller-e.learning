import {Component, Input} from '@angular/core';
import {WizardModel} from "../../../../shared/models/wizard.model";
import {WizardService} from "../../../../core/service/wizard/wizard.service";

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrl: './material-card.component.css'
})
export class MaterialCardComponent {
  @Input() learningModule!: WizardModel;
  @Input() editMode: boolean;

  constructor(private wizardService: WizardService) {}

  deleteCard(wizardId: string): void {
    this.wizardService.deleteById(wizardId).subscribe({
      next: () => window.location.reload(),
      error: (err) => console.error('Delete failed:', err)
    });
  }
}
