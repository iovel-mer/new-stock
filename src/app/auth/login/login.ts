import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';





@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  authService = inject(AuthService);
  fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

   submit() {
    if (this.form.valid) {
      console.log('Form data:', this.form.value);
      // send to backend here later
    } else {
      this.form.markAllAsTouched(); // show errors
    }
  }

  close() {
    this.authService.closeModals();
  }
}

