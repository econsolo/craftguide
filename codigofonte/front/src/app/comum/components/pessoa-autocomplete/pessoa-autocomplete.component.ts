import {Component, Input, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Alerta} from '../../config/alerta';
import {PessoaAutocompleteService} from './pessoa-autocomplete.service';

declare var $: any;

@Component({
  selector: 'pessoa-autocomplete-component',
  templateUrl: './pessoa-autocomplete.component.html',
  styleUrls: ['./pessoa-autocomplete.style.css']
})

export class PessoaAutocompleteComponent implements OnInit {

  public pessoa: any = {};
  @Input('formControlName') formControlName: string;
  @Input('formGroup') form: FormGroup;
  @Output('pessoaSelecionada') enviarSelecionada = new EventEmitter();

  public pessoas: any[] = [];

  constructor(@Inject(Alerta) private alerta: Alerta,
              @Inject(PessoaAutocompleteService) private pessoaAutocompleteService: PessoaAutocompleteService) {
  }

  ngOnInit() {

  }

  public selecionarPessoa(pessoa): void {
    this.pessoa = pessoa;
    this.pessoas = [];
    this.enviarSelecionada.emit(this.pessoa);
    this.form.controls[this.formControlName].updateValueAndValidity();
  }

  public removerPessoaSelecionada(): void {
    this.pessoa = {};
    this.pessoas = [];
  }

  public buscarPessoasPorNome(nome): void {
    if (!nome || nome.length < 2) {
      this.pessoas = [];
      return;
    }

    setTimeout(() => {
      this.pessoaAutocompleteService.buscarPessoasPorNome(nome).subscribe(data => {
        this.pessoas = data;
      });
    }, 300);
  }

  public isInputValido(): boolean {
    return this.form.controls[this.formControlName].touched && this.form.controls[this.formControlName].valid;
  }

  public isInputInvalido(): boolean {
    return this.form.controls[this.formControlName].touched && this.form.controls[this.formControlName].invalid;
  }

}
