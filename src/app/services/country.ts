import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

export interface Country {
  name: string;
  isoCode: string;
  dialCode: string;
}

@Injectable({ providedIn: 'root' })
export class CountryService {
  private countriesUrl = 'https://api.salesvault.vc/api/countries';
  private dialCodesUrl = 'https://api.salesvault.vc/api/countries/dial-codes';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return forkJoin([
      this.http.get<any[]>(this.countriesUrl),
      this.http.get<any[]>(this.dialCodesUrl)
    ]).pipe(
      map(([countries, dialCodes]) => {
        return countries.map(c => {
          const code = dialCodes.find(d => d.code === c.code);
          return {
            name: c.name,
            isoCode: c.code,
            dialCode: code ? code.dial_code : ''
          };
        });
      })
    );
  }
}
