import { STATE_MODELS } from './entities/app-state/index';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppStateModule } from './app-state/app-state.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GatewayModule } from './gateway/gateway.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStateModule.forRoot(),
    SharedModule.forRoot(),
    AuthModule.forRoot(),
    GatewayModule.forRoot()
  ],
  providers: [
    ...STATE_MODELS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
