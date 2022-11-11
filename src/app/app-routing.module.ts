import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { HeaderComponent } from './components/header/header.component';
import { MorePageComponent } from './components/more-page/more-page.component';
import { PageinconstructionComponent } from './components/pageinconstruction/pageinconstruction.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductsComponent } from './components/products/products.component';
import { TravelPageComponent } from './components/travel-page/travel-page.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'travel', component: TravelPageComponent },
  { path: 'more', component: PageinconstructionComponent },
  { path: 'blog', component:  PageinconstructionComponent},
  { path: 'store', component: ProductsComponent },
  { path: 'store/:searchTerm', component: ProductsComponent },
  { path: 'tag/:tag', component: ProductsComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: '**', component: HeaderComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
