import { Inject, Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UtilService } from '../util/util.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(@Inject(Router) private router: Router,
    @Inject(UtilService) private utilService: UtilService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return new Observable<boolean>(observer => {

      const errorMessage = 'Você não está autorizado à acessar esta funcionalidade, por favor, efetue login e tente novamente';
      observer.next(true);
      observer.complete();
      /*if (this.utilService.isLogado()) {

        const id_perfil = route.data['id_perfil'] as string;
        const id_user = this.utilService.getId();

        this.utilService.usuarioPossuiAcesso(id_user, id_perfil).subscribe(data => {
          if (!data) {
            this.utilService.mensagemErro(errorMessage, () => {
              this.router.navigate(['']);
            });
            observer.next(false);
            observer.complete();
          } else {
            observer.next(true);
            observer.complete();
          }
        });

      } else {

        this.utilService.mensagemErro(errorMessage, () => {
          this.router.navigate(['']);
        });

        observer.next(false);
        observer.complete();
      }*/
    });

  }
}
