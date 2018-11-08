import { Perfil } from './perfil';

export class Usuario {
  id: string;
  login: string;
  senha: string;
  repetirSenha: string;
  email: string;

  perfil: Perfil = new Perfil();
}
