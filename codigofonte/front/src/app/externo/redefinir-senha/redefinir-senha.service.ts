import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Usuario } from '../../comum/model/usuario';

@Injectable()
export class RedefinirSenhaService {

  private url = '/api/login/';

  constructor(@Inject(Http) private http: Http) {
  }

  public redefinir(usuario: Usuario) {
    return this.http.post(`${this.url}/redefinir-senha`, usuario);
  }

}
