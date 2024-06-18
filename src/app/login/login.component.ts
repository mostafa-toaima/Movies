import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  password: any = '';
  username = '';
  errormsg = "";

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.username.trim().length == 0) {
      this.errormsg = "Username is required";
    } else if (this.password.trim().length == 0) {
      this.errormsg = 'Password is required';
    } else {
      this.errormsg = "";
      let res = this.authService.login(this.username, this.password);
      if (res == 200) {
        this.router.navigate(['home']);
      }
      if (res == 403) {
        this.errormsg ="Invalid Credentials"
      }
    }
  }
}
