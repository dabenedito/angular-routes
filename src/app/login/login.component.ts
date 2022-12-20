import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ],
})
export class LoginComponent implements OnInit {
  user: User = { password: '', username: '' };

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user);
  }
}
