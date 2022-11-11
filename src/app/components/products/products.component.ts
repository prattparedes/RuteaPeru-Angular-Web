import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

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
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.products = this.productService.getAllProductsBySearchTerm(
          params['searchTerm']
        );
      else if (params['tag'])
        this.products = this.productService.getAllFoodsByTag(params['tag']);
      else this.products = productService.getAll();
    });
  }

  ngOnInit(): void {}
}
