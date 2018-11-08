import { Route } from '@angular/router';
import { RedefinirSenhaComponent } from './redefinir-senha.component';

export const redefinir_senha_route: Route = {
  path: 'redefinir-senha/:id',
  component: RedefinirSenhaComponent,
  data: { name: 'Redefinir Sennha', icon: 'fa fa-home', menu: false, parent: null }
};
