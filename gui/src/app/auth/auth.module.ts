import { NgModule, ModuleWithProviders } from '@angular/core';
import { GUARDS } from './guards/index';

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
        ...GUARDS
      ]
    };
  }
}

