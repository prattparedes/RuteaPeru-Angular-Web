import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(productService:ProductsService) { 
    productService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags
    });
  }

  ngOnInit(): void {
  }

}
