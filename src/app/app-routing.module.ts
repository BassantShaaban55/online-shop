import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ShopDetailComponent } from './components/shop-detail/shop-detail.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'shop', component:ShopComponent},
  { path:'shopDetail' , component:ShopDetailComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'contact', component:ContactComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
