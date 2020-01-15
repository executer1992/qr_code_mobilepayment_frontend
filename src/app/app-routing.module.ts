import { AuthGuard } from './guards/authGuard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: 'menu',
    loadChildren: () => import('./modules/menu/menu.module').then(m => m.MenuPageModule)
    // canActivate: [AuthGuard]
  },
  {
    path: 'add-product-modal',
    loadChildren: () => import('./data/modals/add-product-modal/add-product-modal.module').then( m => m.AddProductModalPageModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
