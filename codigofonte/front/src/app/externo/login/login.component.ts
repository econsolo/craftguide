import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../comum/model/usuario';
import { UtilService } from '../../comum/util/util.service';
import { CustomValidators } from 'ng2-validation';

declare var $: any;

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.style.css']
})

export class LoginComponent implements OnInit {

  public form: FormGroup;
  public formRedefinirSenha: FormGroup;
  public usuario: Usuario = new Usuario();

  constructor(@Inject(Router) private router: Router,
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    @Inject(LoginService) private loginService: LoginService,
    @Inject(UtilService) private utilService: UtilService) {

    this.form = formBuilder.group({
      login: [this.usuario.login, [
        Validators.required,
        Validators.maxLength(50)
      ]],
      senha: [this.usuario.senha, [
        Validators.required,
        Validators.maxLength(50)
      ]]
    });

    this.formRedefinirSenha = formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.maxLength(50),
        CustomValidators.email
      ]]
    });
  }

  public ngOnInit(): void {
    this.utilService.esvaziarPilha();
    this.utilService.limparCookies();
  }

  public entrar(usuario: Usuario): void {
    if (this.form.invalid) {
      this.utilService.destacarErros(this.form);
      return;
    }

    var data = {
      usuario: {
        id: '123',
        login: 'login mock',
        perfil: {
          id: '55615da08e514414a43c758ab5a0eed9'
        }
      }
    };

    //this.loginService.login(usuario).subscribe(data => {
      this.utilService.salvarCookies(data);
      this.utilService.mensagemSucesso('Login efetuado!', () => {
        this.utilService.irPara(this.router, '/app');
      });
    //});
  }

  public enviarEmail(email: string) {
    if (this.formRedefinirSenha.invalid) {
      this.utilService.destacarErros(this.formRedefinirSenha);
      return;
    }

    const link = `${window.location.origin}/#/redefinir-senha/`;
    this.loginService.enviarEmailRedefinirSenha(email, link).subscribe(() => {
      $('#modalRedefinirSenha').modal('hide');
      this.utilService.mensagemSucesso('As instruções para redefinição de senha foram enviadas ' +
        'para o email ' + email);
    });
  }
}
