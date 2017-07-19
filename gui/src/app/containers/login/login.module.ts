import { AppStateModule } from './../../app-state/app-state.module';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { LoginRouting } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRouting
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class LoginModule {}
