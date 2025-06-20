import { CommonModule } from '@angular/common';
import { Component, inject  } from '@angular/core';
import { AuthService } from '../../services/auth';


@Component({
  selector: 'app-header',
  standalone: true,
   imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'

})
export class HeaderComponent {
  authService = inject(AuthService);
  mobileNavOpen = false;

  openLogin() {
    this.authService.openLogin();
     this.mobileNavOpen = false;
  }

  openRegister() {
    console.log('Clicked Register');
    this.authService.openRegister();
    this.mobileNavOpen = false;
  }
}
