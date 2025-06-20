import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'https://api.salesvault.vc/identity/api/clients/create-client-via-web';
   private loginUrl = 'https://api.salesvault.vc/identity/api/auth/login-for-direct';

  constructor(private http: HttpClient) {}

  createClient(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  login(payload: {
    emailOrUsername: string;
    password: string;
    twoFactorCode:null,
    rememberMe:null
  }): Observable<any> {
    return this.http.post(this.loginUrl, payload);
  }

sendTokenToTrackingAPI(token: string):void {
  window.location.href = `https://salesvault.vc/auth/confirm/${token}`;

  // return this.http.post(url, {}, {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // });
}


}
