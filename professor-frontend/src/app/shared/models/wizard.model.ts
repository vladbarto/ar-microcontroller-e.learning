import {PageStepModel} from "./page-step.model";

export interface WizardModel {
  wizardId: string;
  subtitle: string;
  aim: string;
  pages?: PageStepModel[];
}
