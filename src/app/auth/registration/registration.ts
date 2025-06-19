import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { Country, CountryService } from '../../services/country';
import { ClientService } from '../../services/client';

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
   clientService = inject(ClientService);
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
      const formValue = this.form.value;

      const payload = {
        firstName: formValue.firstname,
        lastName: formValue.lastname,
        email: formValue.email,
        username: formValue.email, // Or a separate username field
        password: formValue.password,
        telephone: formValue.phone,
        country: formValue.country,
        language: formValue.language,
        dateOfBirth: formValue.date,
        source: window.location.hostname, // Automatically fills the current domain
      };

      this.clientService.createClient(payload).subscribe({
        next: (res) => {
          console.log('Client created successfully:', res);
          
        },
        error: (err) => {
          console.error('Error creating client:', err);
        },
      });
    } else {
      this.form.markAllAsTouched(); // Show validation errors
    }
  }


  close() {
    this.authService.closeModals();
  }
}
