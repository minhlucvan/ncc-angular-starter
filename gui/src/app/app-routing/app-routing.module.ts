import { CustomPreloader } from './custom.preloader';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/containers/login/login.module#LoginModule',
    data: {
      preload: true
    }
  },
  {
    path: 'error',
    loadChildren: 'app/containers/error/error.module#ErrorModule',
    data: {
      preload: true
    }
  },
  {
    path: '**',
    redirectTo: '/error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: CustomPreloader })],
  exports: [RouterModule],
  providers: [CustomPreloader]
})
export class AppRoutingModule { }
