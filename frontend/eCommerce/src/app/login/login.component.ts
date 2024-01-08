import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  emptyValues = false
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  login() {
    if (this.email.length !== 0 && this.password.length !== 0) {
      this.emptyValues = false;
      this.authService.login(this.email, this.password).subscribe(
        (data) => {
          console.log(data);
          if (this.email === 'john2@gmail.com') {
            localStorage.setItem('token', JSON.stringify(data));
            this.router.navigateByUrl('/dashboard')
          }
          else {
            this.router.navigateByUrl('/costumer')
          }
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.emptyValues = true;
    }
  }
}
