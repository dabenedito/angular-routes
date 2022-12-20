import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    return this.verificarAcesso();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
    console.log("canLoad: verificando se pode carregar o modulo.");
    return this.verificarAcesso();
  }

  private verificarAcesso() {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate([ '/login' ]);
    return false;
  }
}
