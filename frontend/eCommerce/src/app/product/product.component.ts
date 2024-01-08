import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { identifierName } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any

  constructor(private proudctService: ProductService, private router: Router, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.proudctService.getProducts().subscribe((data) => {
      this.products = data
    })
  }

  deleteProduct(id: number) {
    this.proudctService.deleteProduct(id).subscribe(() => {
      this.toaster.success('Product Deleted Successfully')
    })
  }
}
