import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart: Product[] = [];
  carttotal = 0;

  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cart = items;
      this.carttotal = this.cart.reduce((sum, item) => sum + item.price, 0);
    });
  }
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
  clearCart() {
    this.cartService.clearCart();
  }
}
