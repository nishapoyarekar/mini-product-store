import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
  }

  get total() {
    return this.cart.reduce((acc, product) => acc + product.price, 0);
  }
  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
