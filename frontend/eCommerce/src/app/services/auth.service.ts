import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';
import { Observable, catchError, finalize, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken: string | null = null;
  constructor(private http: HttpClient) { }

  getRoles(): Observable<string[]> {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken: any = jwtDecode(token);

      // Assuming roles are stored in the 'roles' claim
      const roles = decodedToken.role || [];
      return of(roles);
    }

    return of([]);
  }


  getUsers() {
    return this.http.get('http://localhost:3000/api/users') 
  }


  registerUser(first_name: string, last_name: string, email: string, password: string) {
    return this.http.post('http://localhost:3000/api/users/create', { first_name, last_name, email, password })
  }

  login(email: string, password: string) {
    return this.http.post('http://localhost:3000/api/users/login', { email, password });
  }


  updateUser(id: number, first_name: string, last_name: string, email: string, password: string) {
    return this.http.put(`http://localhost:3000/api/users/${id}`, { first_name, last_name, email, password })
  }

  deleteUser(id: number) {
    return this.http.delete(`http://localhost:3000/api/users/delete/${id}`, { responseType: 'text' })
  }


  isLoggedIn() {
    const token = localStorage.getItem('token');
    return token !== undefined && token !== null;
  }
}
