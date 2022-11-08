import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/ui/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ProductComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    AboutComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
