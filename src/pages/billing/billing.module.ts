import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillingPage } from './billing';

@NgModule({
  declarations: [
    BillingPage,
  ],
  imports: [
    IonicPageModule.forChild(BillingPage),
  ],
  exports: [
    BillingPage
  ]
})
export class BillingPageModule {}
