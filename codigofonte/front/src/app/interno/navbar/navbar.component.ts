import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../comum/util/util.service';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.style.css']
})
export class NavbarComponent implements OnInit {

  public token: any = {};

  constructor(@Inject(Router) private router: Router,
    @Inject(UtilService) private utilService: UtilService) {

  }

  ngOnInit() {
    this.token = this.utilService.getAutenticacao();
  }

  public irParaEditarPerfil(): void {
    alert('implementar Editar Perfil');
  }

  public irParaLogin(): void {
    this.utilService.irPara(this.router, '');
  }

  public irParaCadastrarUsuario(): void {
    alert('implementar Cadastrar Usuário');
  }

  public sair(): void {
    this.utilService.mensagemConfirmacao('Deseja sair do sistema?', res => {
      if (res.value) {
        this.utilService.irPara(this.router, '');
      }
    });
  }
}
