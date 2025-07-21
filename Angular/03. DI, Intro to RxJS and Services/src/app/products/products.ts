import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription!: Subscription;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.subscription = this.productsService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
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
    this.subscription.unsubscribe();
  }
}
