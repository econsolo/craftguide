import { REGISTROS_POR_PAGINA } from '../../config/constants';

export class Paginacao {
  campoOrdenacao = '';
  tipoOrdenacao = 'asc';
  pagina = 1;
  tamanhoPagina = REGISTROS_POR_PAGINA;
}
