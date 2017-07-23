import { AppStateModel } from './../entities/app-state/app-state.model';
import { AppStateService } from 'app/app-state/services/app-state.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './app.reducers';
import { compose } from '@ngrx/core/compose';

@NgModule({
  imports: [
    StoreModule.provideStore(reducer, AppStateModel.initialState),
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
        AppStateService
      ]
    };
  }
}
