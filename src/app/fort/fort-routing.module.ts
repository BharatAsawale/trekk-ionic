import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FortPage } from './fort.page';

const routes: Routes = [
  {
    path: '',
    component: FortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FortPageRoutingModule {}
