import { Routes } from '@angular/router';
import { InternoService } from './interno.service';
import { InicioComponent } from './inicio/inicio.component';
import { InicioService } from './inicio/inicio.service';
import { inicio_route } from './inicio/inicio.route';
import { ItemComponent } from './item/item.component';
import { ItemService } from './item/item.service';
import { item_route } from './item/item.route';
import { Alerta } from '../comum/config/alerta';

/** Import dos Components */
export const MODULE_COMPONENTS_INTERNO = [
  InicioComponent,
  ItemComponent
];

/** Import dos Services */
export const MODULE_SERVICES_INTERNO = [
  Alerta,
  InternoService,
  InicioService,
  ItemService
];

/** Deixar o Início SEMPRE como o primeiro que será a página inicial */
export const MODULE_ROUTES_INTERNO: Routes = [
  inicio_route,
  item_route,
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];


