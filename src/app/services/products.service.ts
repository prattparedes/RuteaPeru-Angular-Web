import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTS_BY_ID_URL, PRODUCTS_BY_SEARCH_URL, PRODUCTS_BY_TAG_URL, PRODUCTS_TAGS_URL, PRODUCTS_URL } from '../components/constants/urls';
import { Product } from '../models/product';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http:HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_URL);
  }

  getAllProductsBySearchTerm(searchTerm: string) {
    return this.http.get<Product[]>(PRODUCTS_BY_SEARCH_URL + searchTerm)
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(PRODUCTS_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<Product[]> {
    return tag === 'todos'
      ? this.getAll()
      : this.http.get<Product[]>(PRODUCTS_BY_TAG_URL + tag);
  }

  getProductById(productId:string):Observable<Product>{
    return this.http.get<Product>(PRODUCTS_BY_ID_URL + productId);
  }
}
