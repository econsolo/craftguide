import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router, Routes } from '@angular/router';
import { MODULE_ROUTES_INTERNO } from '../interno.import';

@Component({
  selector: 'sidenav-component',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.style.css']
})

export class SidenavComponent implements OnInit {

  public rotas: Routes;
  public atual: Route;

  constructor(@Inject(Router) private router: Router) {
    router.events.subscribe((nav: NavigationEnd) => {
      this.atual = null;
      this.atual = MODULE_ROUTES_INTERNO.find(routes => ('/' + routes.path === nav.url));
    });
  }

  ngOnInit() {
    this.rotas = MODULE_ROUTES_INTERNO.filter(x => x.data && x.data.name && x.data.menu);
    this.validarRotas();
  }

  public irPara(path): void {
    this.router.navigate([`app/${path}`]);
  }

  private validarRotas(): void {
    const r = this.rotas;
    const issue = r.filter(x => !x.data || !x.data.name).length > 0;
    if (issue) {
      alert('Atenção: Verifique se sua rota cadastrada possui "name". ' +
        'Veja no arquivo "interno.import.ts"');
    }
  }


}
