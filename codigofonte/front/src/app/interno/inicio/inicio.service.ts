import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InicioService {

  private url = '/api/inicio/';

  constructor(@Inject(Http) private http: Http) {
  }


}
