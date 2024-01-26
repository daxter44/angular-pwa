import { CommonModule } from '@angular/common';
import { Component, OnInit, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { rate } from 'src/app/interfaces/rate.interface';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-exchange-rate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss'],
})
export class ExchangeRateComponent implements OnInit {
  selectedCur = signal<rate | undefined>(undefined);

  baseValue = signal<number>(0);
  targetValue: number = 0;

  constructor(public currencyService: CurrencyService) {
    effect(() => {
      this.targetValue = this.selectedCur()
        ? this.selectedCur()!.mid * this.baseValue()
        : 0;
    });
  }

  ngOnInit(): void {
    this.currencyService.getCurrencies();
  }

  public currenciesList() {
    return this.currencyService.currencies();
  }

  public setCurrency(event: any) {
    this.baseValue.set(event);
  }
}
