import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '**', component: HeaderComponent },
  { path: 'home', component: HeaderComponent },
  { path: 'travel', component: HeaderComponent },
  { path: 'more', component: HeaderComponent },
  { path: 'blog', component:  BlogComponent},
  { path: 'store', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
