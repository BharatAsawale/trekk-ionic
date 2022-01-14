import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'fortdetails',
    loadChildren: () => import('./fortdetails/fortdetails.module').then( m => m.FortdetailsPageModule)
  },
  {
    path: 'fort',
    loadChildren: () => import('./fort/fort.module').then( m => m.FortPageModule)
  },
  {
    path: 'fort-option',
    loadChildren: () => import('./fort-option/fort-option.module').then( m => m.FortOptionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
