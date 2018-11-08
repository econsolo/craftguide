import {Routes} from '@angular/router';
import {Alerta} from '../comum/config/alerta';
import {login_route} from './login/login.route';
import {LoginService} from './login/login.service';
import {LoginComponent} from './login/login.component';

/** Import dos Components */
export const MODULE_COMPONENTS_EXTERNO = [
  LoginComponent
];

/** Import dos Services */
export const MODULE_SERVICES_EXTERNO = [
  Alerta,
  LoginService
];

/** Deixar o Início SEMPRE como o primeiro que será a página inicial */
export const MODULE_ROUTES_EXTERNO: Routes = [
  login_route,
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];


