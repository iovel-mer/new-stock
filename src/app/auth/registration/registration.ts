import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { Country, CountryService } from '../../services/country';

@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: './registration.html',
  styleUrl: './registration.css',
  imports: [CommonModule, ReactiveFormsModule],
})
export class RegistrationComponent {
  countryService = inject(CountryService);
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  countries: Country[] = [];

  form = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    verifyEmail: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{9,15}$/)]],
    date: ['', Validators.required],
    country: [null, Validators.required],
    language: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    dialCode: [null, Validators.required],
  });

  constructor() {
    this.loadCountries();
  }

  loadCountries() {
    this.countryService.getCountries().subscribe({
      next: (data) => (this.countries = data),
      error: (err) => console.error('Failed to load countries', err),
    });
  }
  submit() {
    if (this.form.valid) {
      console.log('Registration Data:', this.form.value);
      // Later you can send this to the backend
    } else {
      this.form.markAllAsTouched(); // Mark all fields to show validation errors
    }
  }

  close() {
    this.authService.closeModals();
  }
}
