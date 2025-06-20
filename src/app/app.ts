import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Middle } from "./components/middle/middle";
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth';
import { HeaderComponent } from "./components/header/header";
import { RegistrationComponent } from "./auth/registration/registration";
import { LoginComponent } from './auth/login/login';


@Component({
  selector: 'app-root',
  imports: [ Middle, CommonModule, HeaderComponent, RegistrationComponent,LoginComponent,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'stock';

   authService = inject(AuthService);
}
