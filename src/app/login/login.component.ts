import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  email: string;
  password: string;
  constructor(private authService: AuthService) {}
  logIn() {
    this.authService.logInWithEmail(this.email, this.password);
  }
}
