import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from '../../comum/model/usuario';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {

  private url = '/api/login/';

  constructor(@Inject(Http) private http: Http) {
  }

  public login(usuario: Usuario) {
    return this.http.post(this.url, usuario).pipe(map(res => res.json()));
  }

  public enviarEmailRedefinirSenha(email: string, link: string) {
    const obj = { email: email, link: link };
    return this.http.post(`${this.url}enviar-email-redefinir-senha`, obj);
  }

}
