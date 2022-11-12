import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-store',
  templateUrl: './empty-store.component.html',
  styleUrls: ['./empty-store.component.css']
})
export class EmptyStoreComponent implements OnInit {
  @Input()
  visible = false;
  @Input()
  notFoundMessage = "Sin Coincidencias!"
  @Input()
  resetLinkText = "Volver"
  @Input()
  resetLinkRoute = "/";

  constructor() { }

  ngOnInit(): void {
  }

}
