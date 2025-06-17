import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  showLoginModal = false;
  showRegisterModal = false;

  openLogin(): void {
    this.showLoginModal = true;
    
  }

  openRegister(): void {
    this.showRegisterModal = true;
    this.showLoginModal = false;
  }

  closeModals(): void {
    this.showLoginModal = false;
    this.showRegisterModal = false;
  }
}
