import { Injectable } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ReplaySubject } from 'rxjs';
import { Product } from 'src/app/core/models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products$: ReplaySubject<Product[]> = new ReplaySubject(1);
  private products = [];

  constructor(
    private productApi: ProductService
  ) {
    this.updateProducts();
  }

  public updateProducts$() {
    this.products$.next(this.products);
  }

  public updateProducts() {
    this.productApi.getAll().subscribe(
      (res: any) => {
        this.products = res;
        this.updateProducts$();
      }
    );
  }

  public getproductById(productId: number) {
    const index = this.products.map((e) => e.id).indexOf(productId);
    if (index !== -1) { return this.products[index]; }
  }

  public createProduct(product: Product) {
    this.productApi.create(product).subscribe(
      (result: number) => {
        product.id = result;
        this.products.push(product);
        this.updateProducts$();
      }
    );
  }

  public updateProduct(product: Product) {
    this.productApi.update(product).subscribe(
      () => {
        this.products = this.products.map((e) => {
          if (e.id === product.id) {
            e = product;
          }
          return e;
        });
        this.updateProducts$();
      }
    );
  }

  public deleteProduct(productId: number) {
    this.productApi.delete(productId).subscribe(
      () => {
        const index = this.products.map((e) => e.id).indexOf(productId);
        if (index !== -1) { this.products.splice(index, 1); }
        this.updateProducts$();
      }
    );
  }
}
