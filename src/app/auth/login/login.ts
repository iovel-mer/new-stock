import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { ClientService } from '../../services/client';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  authService = inject(AuthService);
  clientService = inject(ClientService);
  fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  submit() {
    if (this.form.valid) {
      const formValue = this.form.value;

      const payload = {
        emailOrUsername: formValue.email!,
        password: formValue.password!,
        twoFactorCode: null,
        rememberMe: null
      };

     

      this.clientService.login(payload).subscribe({
        next: (res) => {
          const token = res;
          console.log('Login response:', res);

          if (token) {
          
              this.clientService.sendTokenToTrackingAPI(token)
           
          } else {
            console.error('❌ No accessToken in response.');
          }
        },
        error: (err) => {
          console.error('❌ Login failed:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  close() {
    this.authService.closeModals();
  }
}
