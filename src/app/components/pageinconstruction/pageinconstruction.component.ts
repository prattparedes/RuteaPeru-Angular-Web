import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-pageinconstruction',
  templateUrl: './pageinconstruction.component.html',
  styleUrls: ['./pageinconstruction.component.css'],
})
export class PageinconstructionComponent implements OnInit {
  fbIcon = faFacebook;

  constructor() {}

  ngOnInit(): void {}
}
