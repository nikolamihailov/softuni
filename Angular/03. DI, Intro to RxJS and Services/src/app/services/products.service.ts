import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // harcoded data
  products: Product[] = [
    {
      id: 1,
      name: 'The Last of Us',
      price: 124.99,
      category: 'Games',
    },
    {
      id: 2,
      name: 'The Last of Us 2',
      price: 134.99,
      category: 'Games',
    },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }
}
