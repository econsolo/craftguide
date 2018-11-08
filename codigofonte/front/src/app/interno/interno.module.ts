import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MODULE_COMPONENTS_INTERNO } from './interno.import';
import { MODULE_SERVICES_INTERNO } from './interno.import';
import { CustomFormsModule } from 'ng2-validation';
import { ComponentsModule } from '../comum/components/components.module';
import { UtilModule } from '../comum/util/util.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ComponentsModule,
    UtilModule,
    RouterModule.forChild([])
  ],
  declarations: [MODULE_COMPONENTS_INTERNO],
  providers: [MODULE_SERVICES_INTERNO]
})

export class InternoModule {

}


