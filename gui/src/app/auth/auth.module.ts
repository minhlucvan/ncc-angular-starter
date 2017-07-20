import { NgModule, ModuleWithProviders } from '@angular/core';
import { GUARDS } from './guards/index';
import { AuthService } from './servicers/auth/auth.service';

@NgModule({
  imports: [
  ],
  declarations: []
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        ...GUARDS
      ]
    };
  }
}

