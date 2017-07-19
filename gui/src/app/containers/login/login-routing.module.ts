import { SimpleLayoutComponent } from 'app/shared/components/simple-layout/simple-layout.component';
import { LoginComponent } from './login.component';
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
