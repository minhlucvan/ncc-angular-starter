import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable()
export class AppService {

  constructor() {
    this.log('Construct AppService');
  }

  /** ignore log in production mode */
  log(message?: any, ...optionalParams: any[]) {
     if (!environment.production) {
       console.log(message, ...optionalParams);
    }
  }

}
