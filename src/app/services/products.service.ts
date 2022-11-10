import { Injectable } from '@angular/core';
import { sample_products } from '../backend/data';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAll():Product[] {
    return sample_products
  }

  getAllProductsBySearchTerm(searchTerm:string) {
    return this.getAll().filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
