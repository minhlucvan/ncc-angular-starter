import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppStateService } from 'app/app-state/services/app-state.service';

@NgModule({
  imports: [
  ],
  declarations: [],
  exports: [
  ]
})
export class AppStateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppStateModule,
      providers: [
        AppStateService
      ]
    };
  }
}
