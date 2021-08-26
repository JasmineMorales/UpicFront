import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    children: [ {
      path: 'payment',
      loadChildren: () => import('./components/ModuloPagos/payment/payment.module').then(mod => mod.PaymentModule),
    }]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
