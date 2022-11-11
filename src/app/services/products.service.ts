import { Injectable } from '@angular/core';
import { sample_products, sample_tags } from '../backend/data';
import { Product } from '../models/product';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getAll(): Product[] {
    return sample_products;
  }

  getAllProductsBySearchTerm(searchTerm: string) {
    return this.getAll().filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): Product[] {
    return tag == 'todos'
      ? this.getAll()
      : this.getAll().filter((product) => product.tags?.includes(tag));
  }

  getProductById(productId:string):Product{
    return this.getAll().find(product => product.id == productId) ?? new Product();
  }
}
