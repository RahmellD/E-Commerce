import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:3000/api/products')
  }

  getProductById(id: number) {
    return this.http.get(`http://localhost:3000/api/products/${id}`)
  }

  createProduct(name: string, description: string, price: number, quantity: number) {
    return this.http.post('http://localhost:3000/api/products/create', { name, description, price, quantity })
  }

  editProduct(id: number, name: string, description: string, price: number, quantity: number) {
    return this.http.put(`http://localhost:3000/api/products/${id}`, { name, description, price, quantity })
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/api/products/${id}`, { responseType: 'text' })
  }
}
