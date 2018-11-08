import { Route } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { AuthGuard } from '../../comum/config/auth';
import { PERFIL_COMUM } from '../../comum/config/constants';

export const inicio_route: Route = {
  path: 'inicio',
  component: InicioComponent,
  ///*canActivate: [AuthGuard],*/
  data: { name: 'Início', icon: 'fa fa-home', menu: true, parent: null, id_perfil: PERFIL_COMUM }
};
