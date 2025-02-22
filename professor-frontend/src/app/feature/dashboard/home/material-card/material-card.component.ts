import {Component, Input} from '@angular/core';
import {ChefModel} from "../../../../shared/models/chef.model";
import {LearningModuleModel} from "../../../../shared/models/learning-module.model";

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrl: './material-card.component.css'
})
export class MaterialCardComponent {
  @Input() learningModule!: LearningModuleModel;
}
