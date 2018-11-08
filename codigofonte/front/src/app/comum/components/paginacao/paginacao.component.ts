import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {REGISTROS_POR_PAGINA} from '../../config/constants';

@Component({
  selector: 'paginacao-component',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.style.css']
})
export class PaginacaoComponent implements OnInit {

  @Input('totalRegistros') public total: number;
  @Input('pagina') public pagina: number;
  @Output('trocarPagina') trocarPaginaEmitter = new EventEmitter();
  public registrosPorPagina = REGISTROS_POR_PAGINA;

  constructor() {
  }

  ngOnInit() {

  }

  public getTotalDePaginas(totalDeRegistros) {
    return Math.ceil(totalDeRegistros / this.registrosPorPagina);
  }

  public getRangeDePaginas(totalDeRegistros) {
    const rangeDePaginas = [];
    const pagina = this.pagina;
    let paginaInicial = Math.max(1, pagina - 4);
    let paginaFinal = Math.max(1, Math.min(this.getTotalDePaginas(totalDeRegistros), pagina + 4));
    while (paginaFinal - paginaInicial > 4) {
      if (paginaFinal - pagina >= pagina - paginaInicial) {
        paginaFinal--;
      } else {
        paginaInicial++;
      }
    }
    for (let i = paginaInicial; i <= paginaFinal; i++) {
      rangeDePaginas.push(i);
    }
    return rangeDePaginas;
  }

  public trocarPagina(pagina) {
    this.trocarPaginaEmitter.emit(pagina);
  }

  public getUltimaPagina(): number {
    return Math.ceil(this.total / this.registrosPorPagina);
  }
}
