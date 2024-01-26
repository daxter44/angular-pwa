import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs';
import { rate } from '../interfaces/rate.interface';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  currencies = signal<rate[]>([]);

  constructor(private http: HttpClient) {}

  getCurrencies() {
    return this.http
      .get('http://api.nbp.pl/api/exchangerates/tables/A/')
      .pipe(
        filter(Boolean),
        map((response: any) => {
          if (response.length > 0) {
            this.currencies.set(response[0].rates);
          }
        })
      )
      .subscribe();
  }
}
