import { Component, OnInit } from '@angular/core';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landingbody',
  templateUrl: './landingbody.component.html',
  styleUrls: ['./landingbody.component.css']
})
export class LandingbodyComponent implements OnInit {
  chevronRight = faChevronCircleRight;

  constructor() { }

  ngOnInit(): void {
  }

}
