import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { FormCandeactivate } from './form-candeactivate';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<FormCandeactivate> {
  canDeactivate(
    component: FormCandeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    console.log(currentRoute);
    console.log(currentState);

    return component.podeDesativar();
  }
}
