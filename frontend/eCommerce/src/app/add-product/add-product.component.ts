import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  name = '';
  description = '';
  price = 0;
  quantity = 0;

  constructor(private router: Router, private proudctService: ProductService, private toasterService: ToastrService) { }


  addProduct() {
    this.proudctService.createProduct(this.name, this.description, this.price, this.quantity).subscribe((data) => {
      console.log('Prodcut Added Successfully', data);
      this.toasterService.success('Product added successfully!');
      this.clearForm();

    })
  }

  clearForm() {
    this.name = ''
    this.description = ''
    this.price = 0
    this.quantity = 0;
  }
}




