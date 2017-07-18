import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ApiService } from './servicers/api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
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
