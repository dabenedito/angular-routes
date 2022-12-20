import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { User } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  authenticated: boolean = false;
  mostrarMenuEmitter:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  login(user: User) {
    if (user.username === 'diogo@admin.com' && user.password === '123456') {
      this.authenticated = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate([ '/' ]);
    } else {
      this.authenticated = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  isAuthenticated(): boolean
  {
    return this.authenticated;
  }
}
