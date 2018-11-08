import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PessoaAutocompleteService {

  private pessoa_url = '/api/pessoa/';

  constructor(@Inject(Http) private http: Http) {
  }

  public buscarPessoasPorNome(nome) {
    return this.http.get(this.pessoa_url + 'buscar-por-nome/' + nome).pipe(map(res => res.json()));
  }
}
