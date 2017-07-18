import { SimpleLayoutComponent } from './../../shared/components/simple-layout/simple-layout.component';
import { LoginReducer } from './state/login/login.reducers';
import { LoginModule } from './login.module';
import { LoginComponent } from './components/login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: SimpleLayoutComponent,
        children: [
          {
            path: '',
            component: LoginComponent
          }
        ]
    }
];

export const LoginRouting: ModuleWithProviders = RouterModule.forChild(routes);
