import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.route';
import { httpFactory } from './comum/config/http.factory';
import { ExternoModule } from './externo/externo.module';
import { ExternoComponent } from './externo/externo.component';
import { InternoComponent } from './interno/interno.component';
import { InternoModule } from './interno/interno.module';
import { NavbarComponent } from './interno/navbar/navbar.component';
import { BreadcrumbComponent } from './interno/breadcrumb/breadcrumb.component';
import { SidenavComponent } from './interno/sidenav/sidenav.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    ExternoModule,
    InternoModule,
    routing,
  ],
  declarations: [
    AppComponent,
    ExternoComponent,
    InternoComponent,
    NavbarComponent,
    SidenavComponent,
    BreadcrumbComponent
  ],
  providers: [
    { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions, Router] },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
