import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { GUARDS } from './guards/index';
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
    AppStateModule,
    SharedModule,
    AuthModule,
    GatewayModule
  ],
  providers: [
    ...GUARDS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
