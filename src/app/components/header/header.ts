import { Component } from '@angular/core';
import { LoginModal } from "../login-modal/login-modal";

@Component({
  selector: 'app-header',
  imports: [LoginModal],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
showLoginModal = false;

  openLogin() {
    this.showLoginModal = true;
  }

  closeLogin() {
    this.showLoginModal = false;
  }
}
