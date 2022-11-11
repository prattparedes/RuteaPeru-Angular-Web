import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ICarouselItem } from './Icarousel-item.metadata';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  chevronLeft = faChevronCircleLeft;
  chevronRight = faChevronCircleRight;

  @Input() height = '800';
  @Input() isFullScreen = true;
  @Input() items: ICarouselItem[] = [];

  /**
   * Final Properties
   */

  public finalHeight: string | number = 0;
  public currentPosition = 0;

  autoplay: any;

  constructor() {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  }

  ngOnInit(): void {
    this.items.map((i, index) => {
      i.id = index;
      i.marginLeft = 0;
    });

    this.autoplay = setInterval(() => {
      this.setNext()
    }, 6000)
  }

  ngOnDestroy(): void {
    clearInterval(this.autoplay)
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    this.items.find((i) => i.id === 0)!.marginLeft = -100 * position;
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = nextPosition;

    clearInterval(this.autoplay)
    setTimeout(() => {
      this.autoplay = setInterval(() => {
        this.setNext()
      }, 8000)
    })
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = backPosition;

    clearInterval(this.autoplay)
    setTimeout(() => {
      this.autoplay = setInterval(() => {
        this.setNext()
      }, 8000)
    })
  }

}
