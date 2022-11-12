import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public menuVisible = false;
  barsIcon = faBars;
  xIcon = faXmark;
  cartQuantity = 0;

  constructor(cartService: CartService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    });
  }

  ngOnInit(): void {}

  showMenu() {
    if (this.menuVisible) this.closeMenu();
    else this.menuVisible = true;
  }

  closeMenu() {
    this.menuVisible = false;
  }
}
