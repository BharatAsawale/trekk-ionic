import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FortPageRoutingModule } from './fort-routing.module';

import { FortPage } from './fort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FortPageRoutingModule
  ],
  declarations: [FortPage]
})
export class FortPageModule {}
