import { RouterModule } from '@angular/router';
import { PIPES } from './pipes/index';
import { COMPONENTS } from './components/index';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES } from './services/index';
import { LoadingComponent } from './components/loading/loading.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';


@NgModule({
  imports: [
    CommonModule,
    SlimLoadingBarModule.forRoot(),
    RouterModule
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    LoadingComponent,
  ],
  exports: [
    CommonModule,
    SlimLoadingBarModule,
    ...COMPONENTS,
    ...PIPES
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...SERVICES
      ]
    };
  }
}
