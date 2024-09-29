import { AuthService } from './../service/auth.service';
import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";
import {catchError, of, tap} from "rxjs";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

// paso 1
export class LoginComponent {

  // paso 2
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // paso 3
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:
        ['', [Validators.required]]
    });
  }

  // paso 4
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  // paso 5
  onSubmit(): void {
    console.log('Ingresando al submit');

    // paso 6
    if (this.loginForm.valid) {

      // paso 7
      const { email, password } = this.loginForm.value;

      // paso 8
      this.authService.login(email, password).pipe(
        tap(() => this.router.navigate(['/'])),
        catchError(err => {
          console.error(err);
          return of(null);  // Devuelve un Observable para completar el stream
        })
      ).subscribe();

      // paso 9
    } else {
      console.log("Form no valido");
    }
  }
}
