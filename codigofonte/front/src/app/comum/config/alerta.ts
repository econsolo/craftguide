import { Injectable } from '@angular/core';

declare let swal: any;

@Injectable()
export class Alerta {

  constructor() {
  }

  public avisarObrigatoriedadeDosCampos(form) {
    Object.keys(form.controls).forEach(key => {
      form.get(key).markAsTouched();
    });
  }

  public salvarSucesso(callback?): void {
    swal({
      title: 'Sucesso',
      text: 'O registro foi salvo!',
      type: 'success'
    }).then(callback);
  }

  public alterarSucesso(callback?): void {
    swal({
      title: 'Sucesso',
      text: 'O registro foi alterado!',
      type: 'success'
    }).then(callback);
  }


}
