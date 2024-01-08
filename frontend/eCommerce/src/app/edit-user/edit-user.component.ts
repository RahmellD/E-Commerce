import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  first_name: any
  last_name: any
  email: any
  password: any
  id: any

  constructor(private authService: AuthService, private route: ActivatedRoute, private toaster: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
  }

  editUser() {
    this.authService.updateUser(this.id, this.first_name, this.last_name, this.email, this.password).subscribe(() => {
      this.toaster.success('User updated successfully');
    })
  }


}
