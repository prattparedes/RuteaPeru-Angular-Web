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
}
