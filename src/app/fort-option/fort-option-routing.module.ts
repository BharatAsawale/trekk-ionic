import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FortOptionPage } from './fort-option.page';

const routes: Routes = [
  {
    path: '',
    component: FortOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FortOptionPageRoutingModule {}
