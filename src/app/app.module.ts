import { STATE_MODELS } from './entities/index';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppStateModule } from './app-state/app-state.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GatewayModule } from './gateway/gateway.module';
import { AppService } from 'app/app.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AppStateModule.forRoot(),
    SharedModule.forRoot(),
    AuthModule.forRoot(),
    GatewayModule.forRoot()
  ],
  providers: [
    AppService,
    ...STATE_MODELS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
