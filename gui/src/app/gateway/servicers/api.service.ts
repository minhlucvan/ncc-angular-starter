import {Injectable, EventEmitter} from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions,
  Response,
  RequestMethod,
  Request,
  ResponseContentType} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AuthStateModel } from 'app/entities/app-state/auth-state/auth-state.model';

export enum Action { QueryStart, QueryStop }

export interface RequestOptionsArgs {
    url?: string | null;
    method?: string | RequestMethod | null;
    /** @deprecated from 4.0.0. Use params instead. */
    search?: string | URLSearchParams | {
        [key: string]: any | any[];
    } | null;
    params?: string | URLSearchParams | {
        [key: string]: any | any[];
    } | null;
    headers?: Headers | null;
    body?: any;
    withCredentials?: boolean | null;
    responseType?: ResponseContentType | null;
    auth?: string | boolean | null;
}


@Injectable()
export class ApiService {
  process: EventEmitter<any> = new EventEmitter<any>();
  authFailed: EventEmitter<any> = new EventEmitter<any>();

  private _token: string;

  constructor(
    private _http: Http,
    private _authState: AuthStateModel
  ) {
    _authState.token$.subscribe(this._setToken);
   }

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._request(RequestMethod.Get, url, null, options);
  }

  public post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._request(RequestMethod.Post, url, body, options);
  }

  public put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._request(RequestMethod.Put, url, body, options);
  }

  public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._request(RequestMethod.Delete, url, null, options);
  }

  public patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._request(RequestMethod.Patch, url, body, options);
  }

  public head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._request(RequestMethod.Head, url, null, options);
  }

  private _setToken(token: string) {
    this._token = token;
  }

  private _buildAuthHeader(): string {
    return this._token;
  }

  private _request(method: RequestMethod, url: string, body?: string, options?: RequestOptionsArgs): Observable<Response> {
    const requestOptions = new RequestOptions(Object.assign({
      method: method,
      url: url,
      body: body,
      auth: true
    }, options));

    if (!requestOptions.headers) {
      requestOptions.headers = new Headers();
    }

    if ( options.auth ) {
      requestOptions.headers.set('Authorization', this._buildAuthHeader());
    }

    return Observable.create((observer) => {
      this.process.next(Action.QueryStart);
      this._http.request(new Request(requestOptions))
        .map(res => res.json())
        .finally(() => {
        this.process.next(Action.QueryStop);
      })
        .subscribe(
        (res) => {
          observer.next(res);
          observer.complete();
        },
        (err) => {
          switch (err.status) {
            case 401:
              // intercept 401
              this.authFailed.next(err);
              observer.error(err);
              break;
            default:
              observer.error(err);
              break;
          }
        });
    });
  }
}
