import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from '../constants/carousel.const';
import { ICarouselItem } from '../ui/carousel/Icarousel-item.metadata';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  constructor() {}

  ngOnInit(): void {}
}
