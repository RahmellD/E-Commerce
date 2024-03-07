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
    this.authService.isLoggedIn();
  }

  login() {
    if (this.email.trim().length !== 0 && this.password.trim().length !== 0) {
      this.emptyValues = false;

      this.authService.login(this.email, this.password).subscribe(
        (data) => {
          if (data) {
            localStorage.setItem('token', JSON.stringify(data));
            // Check user roles after successful login
            this.authService.getRoles().subscribe((role) => {
              if (role.includes('Admin')) {
                // Redirect to admin dashboard
                this.router.navigateByUrl('/dashboard');
              } else {
                // Redirect to user/customer dashboard
                this.router.navigateByUrl('/costumer');
              }
            });
          } else {
            console.error('Invalid token received from the server.');
          }
        },
        (err) => {
          console.error('Login failed:', err);
        }
      );
    } else {
      this.emptyValues = true;
    }}
}
