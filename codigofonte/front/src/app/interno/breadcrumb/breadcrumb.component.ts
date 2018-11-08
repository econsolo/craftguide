import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { MODULE_ROUTES_INTERNO } from '../interno.import';

@Component({
  selector: 'breadcrumb-component',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.style.css']
})

export class BreadcrumbComponent implements OnInit {

  public routes: any[] = [];

  constructor(@Inject(Router) private router: Router) {
    this.addInArray(MODULE_ROUTES_INTERNO.find(routes => router.url.startsWith('/app/' + routes.path)));
  }


  ngOnInit() {
  }

  public irPara(path): void {
    this.router.navigate([`app/${path}`]);
  }

  private addInArray(route): void {
    if (route) {
      this.routes.push(route);
      if (route.data.parent) {
        this.addInArray(route.data.parent);
      } else {
        this.routes.reverse();
      }
    } else {
      this.routes = [MODULE_ROUTES_INTERNO.find((r: Route) => r.path === 'inicio')];
    }
  }

}
