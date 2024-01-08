import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  first_name = '';
  last_name = '';
  password = '';
  email = '';
  emptyValues = false;

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/costumer');
    }
  }

  register() {
    if (this.first_name && this.last_name && this.email && this.password) {
      this.emptyValues = false;
      this.authService.registerUser(this.first_name, this.last_name, this.email, this.password).subscribe((data) => {
        localStorage.setItem('token', JSON.stringify(data));
        this.router.navigateByUrl('/costumer')
      }, (err) => {
        console.log(err);
      })

    } else {
      this.emptyValues = true;
    }
  }
}
