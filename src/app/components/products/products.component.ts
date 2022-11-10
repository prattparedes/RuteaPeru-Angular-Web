import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  heartIcon = faHeart;
  products:Product[] = [];

  constructor(private productService:ProductsService) {
    this.products = productService.getAll();
   }

  ngOnInit(): void {
  }

}
