import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRouting } from './error.routing.module';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ErrorRouting
  ],
  declarations: [ PageNotFoundComponent ]
})
export class ErrorModule { }
