import {Component, DestroyRef, Output, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-wizard-form',
  templateUrl: './wizard-form.component.html',
  styleUrl: './wizard-form.component.css'
})
export class WizardFormComponent implements OnInit{

  @Output() wizardClosed = new EventEmitter<boolean>();
  @Output() subtitle = new EventEmitter<string>();
  @Output() aim = new EventEmitter<string>();

  wizardForm: FormGroup = new FormGroup({});

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private destroyRef: DestroyRef
  ) {
  }

  ngOnInit(): void {
    this.buildWizardForm();
  }

  private buildWizardForm() {
     this.wizardForm = this.formBuilder.group({
       subtitle: [''],
       aim: ['']
     });
  }

  public emitSave() {
    this.wizardClosed.emit(false);

    const localSubtitle = this.wizardForm?.get('subtitle')?.value;
    const localAim = this.wizardForm?.get('aim')?.value;

    this.subtitle.emit(localSubtitle);
    this.aim.emit(localAim);
  }


}
