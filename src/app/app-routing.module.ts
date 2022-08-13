import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeOneComponent } from './components/home-one/home-one.component';
import { LoginComponent } from './components/login/login.component';
import { MoreComponent } from './components/more/more.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';



const routes: Routes = [
  { path: 'home1', component: HomeOneComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'more', component: MoreComponent },
  { path: 'cart', component: CartComponent },

  

  { path: '',   redirectTo: '/home1', pathMatch: 'full' }, // redirect to `first-component`

  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
