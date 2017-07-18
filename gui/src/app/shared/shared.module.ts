import { RouterModule } from '@angular/router';
import { PIPES } from './pipes/index';
import { COMPONENTS } from './components/index';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES } from './services/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
  ],
  exports: [
    CommonModule,
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
