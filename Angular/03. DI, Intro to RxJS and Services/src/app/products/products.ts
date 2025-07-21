import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
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
}
