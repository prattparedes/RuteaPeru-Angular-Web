import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-travel-page',
  templateUrl: './travel-page.component.html',
  styleUrls: ['./travel-page.component.css'],
})
export class TravelPageComponent implements OnInit {
  chevronDown = faChevronDown;
  fileIcon = faFile;

  constructor() {}

  ngOnInit(): void {}

  handleClick(id: string) {
    let travelDivs = document.querySelectorAll('.travel__location');
    let actualDiv = document.getElementById(id);

    if (actualDiv?.classList.length === 3) {
      travelDivs.forEach((div) => {
        div.classList.remove('active');
      });
    } else {
      travelDivs.forEach((div) => {
        div.classList.remove('active');
      });
      actualDiv?.classList.add('active');
    }
  }
}
