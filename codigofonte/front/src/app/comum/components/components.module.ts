import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomFormsModule} from 'ng2-validation';
import {PessoaAutocompleteComponent} from './pessoa-autocomplete/pessoa-autocomplete.component';
import {PessoaAutocompleteService} from './pessoa-autocomplete/pessoa-autocomplete.service';
import {CpfFilter} from '../pipe-filters/cpf-filter';
import {PaginacaoComponent} from './paginacao/paginacao.component';
import {RgFilter} from '../pipe-filters/rg-filter';
import {TelefoneDirective} from '../directives/telefone.directive';
import {CepDirective} from '../directives/cep.directive';
import {CnpjDirective} from '../directives/cnpj.directive';
import {RgDirective} from '../directives/rg.directive';
import {DateDirective} from '../directives/date.directive';
import {CpfDirective} from '../directives/cpf.directive';
import {TelefoneFilter} from '../pipe-filters/telefone-filter';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forChild([])
  ],
  declarations: [
    CpfFilter,
    RgFilter,
    TelefoneFilter,
    TelefoneDirective,
    CpfDirective,
    CnpjDirective,
    CepDirective,
    RgDirective,
    DateDirective,
    PessoaAutocompleteComponent,
    PaginacaoComponent
  ],
  providers: [
    PessoaAutocompleteService
  ],
  exports: [
    CpfFilter,
    RgFilter,
    TelefoneDirective,
    TelefoneFilter,
    CpfDirective,
    CnpjDirective,
    CepDirective,
    RgDirective,
    DateDirective,
    PessoaAutocompleteComponent,
    PaginacaoComponent
  ]
})

export class ComponentsModule {

}
