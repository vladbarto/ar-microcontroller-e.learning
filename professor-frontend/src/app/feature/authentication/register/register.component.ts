import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {AuthService} from "../../../core/service/auth/auth.service";
import {UserService} from "../../../core/service/user/user.service";
import {Router} from "@angular/router";
import {RegisterModel} from "../../../shared/models/register.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup = new FormGroup({});
  errorMessage?: string;
  successMessage?: string;
  RegisterSubscription?: Subscription;
  getInfoSubscription?: Subscription;
  isTeacher: boolean = false;

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private userService: UserService,
      private router: Router
  ) {
  }

  ngOnInit(): void {
    this.buildRegisterForm();
  }

  ngOnDestroy(): void {
    this.unsubscribeFromSubscribers();
  }

  private buildRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password2: ['', [Validators.required]],
      role: ['']
    });
  }

  private unsubscribeFromSubscribers(): void {
    this.RegisterSubscription?.unsubscribe();
    this.getInfoSubscription?.unsubscribe();
  }

  register(): void {
    if (!this.registerForm?.valid) {
      this.errorMessage = 'Invalid form completion!';
      setTimeout(() => this.errorMessage = undefined, 3000);
      return;
    }

    const credentials: RegisterModel = {
      email: this.registerForm?.get('email')?.value,
      password: this.registerForm?.get('password2')?.value,
      role: this.registerForm?.get('role')?.value
    };

    this.RegisterSubscription = this.authService.register(credentials).subscribe({
      next: () => {
        if(this.registerForm?.get('role')?.value == 'USER')
          this.successMessage = 'Your account was created. You can now return to the application safely.'
        if(this.registerForm?.get('role')?.value == 'ADMIN') {
          this.detectTeacher();
          this.successMessage = 'Your account was created. You can now return to the login page.'
        }

      },
      error: () => {
        this.errorMessage = 'Invalid credentials';
      }
    });
  }

  detectTeacher() {
    this.isTeacher = true;
  }

  protected goToPage(route): void {
    this.router.navigateByUrl(route)
  }
}
