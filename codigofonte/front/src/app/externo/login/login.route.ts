import { Route } from '@angular/router';
import { LoginComponent } from './login.component';

export const login_route: Route = {
  path: 'login',
  component: LoginComponent,
  data: { name: 'Login', icon: 'fa fa-home', menu: false, parent: null }
};
