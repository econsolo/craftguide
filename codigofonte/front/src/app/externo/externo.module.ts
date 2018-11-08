import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UtilModule } from '../comum/util/util.module';
import { MODULE_SERVICES_EXTERNO } from './externo.import';
import { MODULE_COMPONENTS_EXTERNO } from './externo.import';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        HttpModule,
        BrowserAnimationsModule,
        UtilModule,
        RouterModule.forChild([])
    ],
    declarations: [
        MODULE_COMPONENTS_EXTERNO
    ],
    providers: [
        MODULE_SERVICES_EXTERNO
    ]
})

export class ExternoModule {

}


