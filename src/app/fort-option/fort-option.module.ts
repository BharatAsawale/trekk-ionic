import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FortOptionPageRoutingModule } from './fort-option-routing.module';

import { FortOptionPage } from './fort-option.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FortOptionPageRoutingModule
  ],
  declarations: [FortOptionPage]
})
export class FortOptionPageModule {}
