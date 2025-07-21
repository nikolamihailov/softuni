import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';
import { Subscription } from 'rxjs';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit, OnDestroy {
  products: Product[] = [];
  productsPhotos: Photo[] = [];
  subscriptions: Subscription[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.productsService.getProducts().subscribe((products: Product[]) => {
        this.products = products;
      }),
    );

    this.subscriptions.push(
      this.productsService.getProductsPhotos().subscribe((photos: Photo[]) => {
        console.log(photos);
        this.productsPhotos = photos.slice(0, 10);
      }),
    );
  }

  addNewProduct() {
    const product = {
      id: 4,
      name: 'PUBG',
      price: 99.99,
      category: 'Shooter',
    };
    this.productsService.addProduct(product);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => {
      s.unsubscribe();
    });
  }
}
