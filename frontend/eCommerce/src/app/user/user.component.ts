import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any;
  constructor(private http: HttpClient, private authService: AuthService, private toaster: ToastrService) { }

  ngOnInit() {
    this.showUsers();
  }

  showUsers() {
    this.http.get('http://localhost:3000/api/users').subscribe((data) => {
      this.users = data
    })
  }

  deleteUser(id: number) {
    this.authService.deleteUser(id).subscribe(() => {
      this.toaster.success('User deleted Successfully');
      this.users = this.users.filter((user: { id: number; }) => user.id !== id);
    })
  }

}
