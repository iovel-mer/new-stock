import { CommonModule } from '@angular/common';
import { Component, inject  } from '@angular/core';
import { AuthService } from '../../services/auth';


@Component({
  selector: 'app-header',
   imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'

})
export class HeaderComponent {
  authService = inject(AuthService);

  openLogin() {
    this.authService.openLogin();
  }

  openRegister() {
    this.authService.openRegister();
  }
}
