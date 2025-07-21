import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';
import { Photo } from '../models/photo.model';
import { HttpClient } from '@angular/common/http';

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

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getProductsPhotos(): Observable<Photo[]> {
    const URL = 'https://jsonplaceholder.typicode.com/photos';

    return this.httpClient.get<Photo[]>(URL);
  }
}
