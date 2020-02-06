import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data/data.service';
import { ReplaySubject } from 'rxjs';
import { Product } from 'src/app/core/models/product';

import { faRedo, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  faRedo = faRedo;
  faPlus = faPlus;

  public products$: ReplaySubject<any[]>;

  public product = new Product();
  public productselected = new Product();
  public productId: number;

  public msgNew: string;
  public msgById: string;
  public msgUpdate: string;

  constructor(
    private data: DataService
  ) {
    this.products$ = data.products$;
  }

  ngOnInit() {
  }

  public create() {
    if (this.product.discount && this.product.iva && this.product.pvp) {
      this.data.createProduct(this.product);
      this.product = new Product();
    } else {
      this.msgNew = 'All fields are required';
    }
  }

  public getById() {
    console.log('this.productId :', this.productId, typeof this.productId);
    if (this.productId > 0) {
      this.productselected = Object.assign(new Product(), this.data.getproductById(this.productId));
    } else {
      this.msgById = 'Select Id';
    }
  }

  public update() {
    if (this.productselected.id > 0) {
      this.data.updateProduct(this.productselected);
      this.productselected = new Product();
    } else {
      this.msgUpdate = 'Select Product';
    }
  }

  public delete() {
    if (this.productId > 0) {
      this.data.deleteProduct(this.productId);
      this.productselected = new Product();
    } else {
      this.msgById = 'Select Id';
    }
  }

  public updateData() {
    this.data.updateProducts();
  }

}
