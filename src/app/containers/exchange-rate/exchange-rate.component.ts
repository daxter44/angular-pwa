import { Component, OnInit } from '@angular/core';
import { rate } from 'src/app/interfaces/rate.interface';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss'],
})
export class ExchangeRateComponent implements OnInit {
  currencies: rate[] = [];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe((v) => {
      this.currencies = v;
    });
  }

  getCurrencyList(): void {}
}
