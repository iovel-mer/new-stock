

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private showLoginModalSubject = new BehaviorSubject<boolean>(false);
  private showRegisterModalSubject = new BehaviorSubject<boolean>(false);

  showLoginModal$ = this.showLoginModalSubject.asObservable();
  showRegisterModal$ = this.showRegisterModalSubject.asObservable();

  openLogin(): void {
    this.showLoginModalSubject.next(true);
    this.showRegisterModalSubject.next(false);
  }

  openRegister(): void {
    console.log('Opening register modal');
    this.showRegisterModalSubject.next(true);
    this.showLoginModalSubject.next(false);
  }

  closeModals(): void {
    this.showLoginModalSubject.next(false);
    this.showRegisterModalSubject.next(false);
  }
}
