import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {User} from '../models/user.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

}
