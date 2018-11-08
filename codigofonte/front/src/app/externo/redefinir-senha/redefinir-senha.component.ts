import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../comum/model/usuario';
import { UtilService } from '../../comum/util/util.service';
import { RedefinirSenhaService } from './redefinir-senha.service';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'redefinir-senha-component',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.style.css']
})

export class RedefinirSenhaComponent implements OnInit {

  public form: FormGroup;
  public usuario: Usuario = new Usuario();

  constructor(@Inject(Router) private router: Router,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    @Inject(RedefinirSenhaService) private redefinirSenhaService: RedefinirSenhaService,
    @Inject(UtilService) private utilService: UtilService) {

    const senha = new FormControl(this.usuario.senha, [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(6)
    ]);

    this.form = formBuilder.group({
      idUsuario: [this.usuario.id, [
        Validators.required
      ]],
      senha: senha,
      repetir_senha: [this.usuario.repetirSenha, [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(6),
        CustomValidators.equalTo(senha)
      ]]
    });
  }

  public ngOnInit(): void {
    this.utilService.limparCookies();

    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.usuario.id = id;
        this.form.controls['idUsuario'].setValue(id);
      }
    });
  }

  public salvar(usuario: Usuario): void {
    if (this.form.invalid) {
      this.utilService.destacarErros(this.form);
      return;
    }

    this.redefinirSenhaService.redefinir(usuario).subscribe(() => {
      this.utilService.mensagemSucesso('Senha redefinida!', () => {
        this.utilService.irPara(this.router, '');
      });
    });
  }
}
