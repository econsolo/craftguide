import { Inject, Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Autenticacao } from '../model/autenticacao';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

declare var swal: any;

@Injectable()
export class UtilService {

  constructor(@Inject(Http) private http: Http) {

  }

  private pilhaDeRotas = [] as any[];
  private CHAVE_COOKIE = 'autenticacao';

  static atribuirSemReferencia(objeto) {
    return Object.assign({}, objeto);
  }

  static validarArray(control: AbstractControl): ValidationErrors | null {
    const valido = control.value && control.value.length;
    return valido ? null : { validarArray: true };
  }

  static validarData(control: AbstractControl): ValidationErrors | null {
    const match = control.value && control.value.match(/^(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/);
    return match ? null : { validarData: true };
  }

  public destacarErros(form: FormGroup) {
    if (!form) {
      throw new Error('O FormGroup não deve estar nulo!');
    }
    Object.keys(form.controls).forEach(key => {
      form.get(key).markAsTouched();
    });
  }

  public mensagemErro(mensagem: string = 'Ocorreu um erro desconhecido!',
    callback: Function = () => {
    }) {
    swal({
      title: 'Oops...',
      text: mensagem,
      type: 'error',
      confirmButtonText: 'Entendi',
      confirmButtonClass: 'btn btn-success btn-lg spacing width-100px',
      buttonsStyling: false
    }).then(callback);
  }

  public mensagemSucesso(mensagem: string, callback: Function = () => {
  }) {
    this.validarMensagem(mensagem);
    swal({
      title: 'Sucesso!',
      text: mensagem,
      type: 'success',
      confirmButtonText: 'Feito',
      confirmButtonClass: 'btn btn-success btn-lg spacing width-100px',
      buttonsStyling: false
    }).then(callback);
  }

  public mensagemInfo(mensagem: string, callback: Function = () => {
  }) {
    this.validarMensagem(mensagem);
    swal({
      title: 'Informação!',
      text: mensagem,
      type: 'info',
      confirmButtonText: 'Entendi',
      confirmButtonClass: 'btn btn-success btn-lg spacing width-100px',
      buttonsStyling: false
    }).then(callback);
  }

  public mensagemConfirmacao(mensagem: string, callback: Function) {
    this.validarMensagem(mensagem);
    this.validarCallback(callback);
    swal({
      title: 'Tem certeza?',
      text: mensagem,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      confirmButtonClass: 'btn btn-success btn-lg spacing width-100px',
      cancelButtonClass: 'btn btn-danger btn-lg spacing width-100px',
      buttonsStyling: false
    }).then(callback);
  }

  private validarMensagem(mensagem: string) {
    if (!mensagem) {
      throw new Error('É obrigatório definir uma mensagem');
    }
  }

  private validarCallback(callback: Function) {
    if (!callback) {
      throw new Error('É obrigatório definir um callback');
    }
  }

  public salvarCookies(dados) {
    localStorage.setItem(this.CHAVE_COOKIE, JSON.stringify(dados));
  }

  public limparCookies() {
    localStorage.clear();
  }

  public isLogado() {
    const item = localStorage.getItem(this.CHAVE_COOKIE);
    return !!item;
  }

  public getAutenticacao() {
    if (this.isLogado()) {
      return JSON.parse(localStorage.getItem(this.CHAVE_COOKIE)) as Autenticacao;
    }
    return null;
  }

  public getId(): string {
    if (this.isLogado()) {
      const obj = JSON.parse(localStorage.getItem(this.CHAVE_COOKIE));
      return obj.usuario.id;
    }
    return null;
  }


  public getPerfil() {
    if (this.isLogado()) {
      const obj = JSON.parse(localStorage.getItem(this.CHAVE_COOKIE));
      return obj.usuario.perfil.id;
    }
    return null;
  }

  public getToken() {
    if (this.isLogado()) {
      const obj = JSON.parse(localStorage.getItem(this.CHAVE_COOKIE));
      return obj.token;
    }
    return null;
  }

  public getLogin() {
    if (this.isLogado()) {
      const obj = JSON.parse(localStorage.getItem(this.CHAVE_COOKIE));
      return obj.usuario.login;
    }
    return null;
  }

  public irPara(router: Router, rota: string, ...parametros: any[]) {
    if (parametros) {
      router.navigate([rota].concat(parametros));
    } else {
      router.navigate([rota]);
    }
    this.pilhaDeRotas.push({
      rota: rota,
      chamador: router.url,
      parametros: parametros ? parametros : []
    });
  }

  public voltarParaChamador(router: Router, padrao: string) {
    if (!this.isPilhaVazia()) {
      const desempilhado = this.pilhaDeRotas.pop();
      router.navigate([decodeURI(desempilhado.chamador)]);
    } else {
      router.navigate([padrao]);
    }
  }

  public esvaziarPilha() {
    this.pilhaDeRotas = [];
  }

  public isPilhaVazia() {
    return !this.pilhaDeRotas || !this.pilhaDeRotas.length;
  }

  public retornaStringMes(data: Date): String {
    const month = [];
    month[0] = 'Janeiro';
    month[1] = 'Fevereiro';
    month[2] = 'Março';
    month[3] = 'Abril';
    month[4] = 'Maio';
    month[5] = 'Junho';
    month[6] = 'Julho';
    month[7] = 'Agosto';
    month[8] = 'Setembro';
    month[9] = 'Outubro';
    month[10] = 'Novembro';
    month[11] = 'Dezembro';
    const n = month[data.getMonth()];

    return n;
  }

  public retornaDiaDaSemana(data: String): String {
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const arr = data.split('/').reverse();
    const teste = new Date(Number(arr[0]), Number(arr[1]) - 1, Number(arr[2]));
    const dia = teste.getDay();
    if (dia === new Date().getDay()) {
      return dias[dia] + ' - Hoje';
    }
    return dias[dia];
  }

  public removerSegundos(hora: string): string {
    return hora.slice(0, -3);
  }

  public removerAno(ddmmyyyy: string): string {
    return ddmmyyyy.slice(0, -5);
  }

  public dataEhoraParaData(data: string, hora: string) {
    try {
      const arrayDiaMesAno = data.split('/');
      const arrayHoraMinuto = hora.split(':');

      return new Date(Number(arrayDiaMesAno[2]),
        Number(arrayDiaMesAno[1]) - 1,
        Number(arrayDiaMesAno[0]),
        Number(arrayHoraMinuto[0]),
        Number(arrayHoraMinuto[1]));
    } catch (error) {
      throw new Error('Erro ao transformar a data e hora! :(');
    }
  }

  public usuarioPossuiAcesso(id_usuario: string, id_perfil: string) {
    return this.http.post(`/api/login/usuario-possui-acesso/`, {
      idUsuario: id_usuario,
      idPerfil: id_perfil
    }).pipe(map(res => res.json()));
  }
}
