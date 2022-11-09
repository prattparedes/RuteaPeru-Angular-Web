import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { MorePageComponent } from './components/more-page/more-page.component';
import { ProductsComponent } from './components/products/products.component';
import { TravelPageComponent } from './components/travel-page/travel-page.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'travel', component: TravelPageComponent },
  { path: 'more', component: MorePageComponent },
  { path: 'blog', component:  BlogComponent},
  { path: 'store', component: ProductsComponent },
  { path: '**', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
