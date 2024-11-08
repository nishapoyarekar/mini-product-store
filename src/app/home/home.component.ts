import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
