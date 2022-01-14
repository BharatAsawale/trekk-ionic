import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FortdetailsPage } from './fortdetails.page';

const routes: Routes = [
  {
    path: '',
    component: FortdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FortdetailsPageRoutingModule {}
