import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from './containers/exchange-rate/exchange-rate.component';
import { GaleryComponent } from './containers/galery/galery.component';

const routes: Routes = [
  {
    path: 'exchange',
    component: ExchangeRateComponent,
  },
  {
    path: 'galery',
    component: GaleryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
