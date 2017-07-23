import { environment } from 'environments/environment';

export const DEV_HOST = location.hostname;
export const PROD_HOST = location.hostname;
export const DEV_PORT = location.hostname;
export const PROD_PORT = location.hostname;

export const HOST = (environment.production ? DEV_HOST : PROD_HOST);
export const PORT = (environment.production ? DEV_PORT : PROD_PORT);

export const API_URL = '//' + HOST + ':' + PORT;

export const API = {
  auth: {
    login: '',
    logout: '',
    refreshToken: '',
    checkToken: ''
  }
};


