import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-costumer',
  templateUrl: './costumer.component.html',
  styleUrls: ['./costumer.component.scss']
})
export class CostumerComponent implements OnInit {
  products: any

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data
    })
  }
}
