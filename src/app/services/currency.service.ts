import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { rate } from '../interfaces/rate.interface';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<rate[]> {
    return this.http
      .get('http://api.nbp.pl/api/exchangerates/tables/A/')
      .pipe(map((response: any) => response[0].rates));
  }

  getExchangeRate(from: string, to: string) {
    return this.http
      .get(`https://api.exchangerate.host/convert?from=${from}&to=${to}`)
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
