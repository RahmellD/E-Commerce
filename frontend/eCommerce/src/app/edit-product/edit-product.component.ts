import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  id: any
  name: any
  description: any
  price: any;
  quantity: any

  constructor(private router: Router, private proudctService: ProductService, private toasterService: ToastrService, private route: ActivatedRoute,) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
  }

  editProducts() {
    this.proudctService.editProduct(this.id, this.name, this.description, this.price, this.quantity).subscribe(() => {
      this.toasterService.success('Product updated successfully');
      this.clearForm()
    })
  }

  clearForm() {
    this.name = ''
    this.description = ''
    this.price = 0
    this.quantity = 0
  }

}
