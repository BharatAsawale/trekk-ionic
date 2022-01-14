import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FortdetailsPageRoutingModule } from './fortdetails-routing.module';

import { FortdetailsPage } from './fortdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FortdetailsPageRoutingModule
  ],
  declarations: [FortdetailsPage]
})
export class FortdetailsPageModule {}
