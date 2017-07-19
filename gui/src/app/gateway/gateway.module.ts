import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ApiService } from './servicers/api.service';
import { AppStateModule } from 'app/app-state/app-state.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AppStateModule
  ],
  declarations: [
  ]
})
export class GatewayModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GatewayModule,
      providers: [
        ApiService
      ]
    };
  }
}
