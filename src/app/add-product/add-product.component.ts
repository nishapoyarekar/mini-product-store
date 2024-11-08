import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-add-product',
templateUrl: './add-product.component.html',
styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent {
  newProduct = { title: '', price: 0, description: '', image: '', category: '' };
  constructor(private http: HttpClient) {}

  addProduct() {
      this.http.post('https://fakestoreapi.com/products', this.newProduct).subscribe(response => {
      console.log('Product added', response);
    });
  }
}