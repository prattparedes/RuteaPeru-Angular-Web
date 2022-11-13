import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  heartIcon = faHeart;
  products: Product[] = [];

  constructor(
    private productService: ProductsService,
    activatedRoute: ActivatedRoute
  ) {

    let productsObservable: Observable<Product[]>;
    
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        productsObservable = this.productService.getAllProductsBySearchTerm(
          params['searchTerm']
        );
      else if (params['tag'])
        productsObservable = this.productService.getAllFoodsByTag(
          params['tag']
        );
      else productsObservable = productService.getAll();

      productsObservable.subscribe((serverProducts) => {
        this.products = serverProducts;
      });
    });
  }

  ngOnInit(): void {}
}
