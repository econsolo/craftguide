import { Route } from '@angular/router';
import { ItemComponent } from './item.component';
import { PERFIL_COMUM } from '../../comum/config/constants';
import { inicio_route } from '../inicio/inicio.route';

export const item_route: Route = {
  path: 'item',
  component: ItemComponent,
  data: { name: 'Item', icon: 'fa fa-home', menu: true, parent: inicio_route, id_perfil: PERFIL_COMUM }
};
