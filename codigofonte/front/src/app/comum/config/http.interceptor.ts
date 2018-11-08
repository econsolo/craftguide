import { Injectable } from '@angular/core';
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from '@angular/http';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

declare var $: any;
declare var swal: any;

@Injectable()
export class InterceptedHttp extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private router: Router) {
    super(backend, defaultOptions);
  }

  request(url: Request, options?: RequestOptionsArgs): Observable<Response> {
    let showLoading = true;
    if (url.headers.get('disableLoading')) {
      showLoading = false;
    }
    this.beforeRequest(showLoading);
    return super.request(url, this.getRequestOptionArgs(options)).pipe(
      catchError(res => {

        let erro = {};
        try {
          erro = res.json();
        } catch (e) {

        }

        let msg = erro['message'];
        let title = 'Oops...';

        const exceptionType = msg.indexOf(':');
        if (exceptionType > -1) {
          msg = msg.slice(exceptionType + 2, msg.length);
        }

        switch (res.status) {
          case 400:
            // exceção de negócio
            break;
          case 401:
            title = 'Acesso Negado!';
            msg = 'Você não está autorizado à acessar esta funcionalidade, volte e efetue o login.';
            this.router.navigate(['/login']);
            break;
          default:
            break;
        }

        swal(
          title,
          msg,
          'error'
        );
        return Observable.throw(res);
      }),
      finalize(() => {
        this.afterRequest();
      }));
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(url, this.getRequestOptionArgs(options));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.post(url, body, this.getRequestOptionArgs(options));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.put(url, body, this.getRequestOptionArgs(options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(url, this.getRequestOptionArgs(options));
  }

  private beforeRequest(showLoading) {
    if (!showLoading) {
      return;
    }
    const $body = $('body');

    $('#carregando').show();
    $body.css('pointer-events', 'none');
  }

  private afterRequest() {
    const $body = $('body');

    $('#carregando').hide();
    $body.css('pointer-events', 'auto');
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {

    if (!options) {
      options = new RequestOptions();
    }
    if (!options.headers) {
      options.headers = new Headers();
      options.headers.append('Content-Type', 'application/json');
    }

    const token = JSON.parse(localStorage.getItem('autenticacao'));
    if (token) {
      options.headers.append('auth-token', token.token);
    }

    if (options.headers.get('intercept')) {
      options = null;
    }

    return options;
  }
}
