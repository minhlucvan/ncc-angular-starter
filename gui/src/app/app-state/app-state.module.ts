import { initReducers } from './app.reducers';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.provideStore(initReducers),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  declarations: [],
  exports: [
    StoreModule,
    RouterStoreModule,
    StoreDevtoolsModule
  ]
})
export class AppStateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppStateModule,
      providers: [
      ]
    };
  }
}
