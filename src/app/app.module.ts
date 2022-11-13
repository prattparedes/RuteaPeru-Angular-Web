import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/ui/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { BlogComponent } from './components/blog/blog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './components/ui/carousel/carousel.component';
import { LandingbodyComponent } from './components/ui/landingbody/landingbody.component';
import { TravelPageComponent } from './components/travel-page/travel-page.component';
import { MorePageComponent } from './components/more-page/more-page.component';


import { SearchComponent } from './search/search.component';
import { StarRatingModule } from 'angular-star-rating';
import { TagsComponent } from './components/ui/tags/tags.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { PageinconstructionComponent } from './components/pageinconstruction/pageinconstruction.component';
import { EmptyStoreComponent } from './components/ui/empty-store/empty-store.component'; 

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
    BlogComponent,
    CarouselComponent,
    LandingbodyComponent,
    TravelPageComponent,
    MorePageComponent,
    SearchComponent,
    TagsComponent,
    ProductPageComponent,
    CartPageComponent,
    PageinconstructionComponent,
    EmptyStoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    StarRatingModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
