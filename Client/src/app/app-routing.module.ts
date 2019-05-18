import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiftComponent } from './gift/gift.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { DonationsComponent } from './donations/donations.component';
import {TestComponent} from './test/test.component';
import {AppComponent} from './app.component'
import { DoComponent } from './do/do.component';

const routes: Routes =[
  {path:'', redirectTo: '/Home',pathMatch:'full'}, 
  {path:'Home/donationTypes', component:DoComponent},
  {path:'Home', component:AppComponent},
  {path: 'Home/donationTypes/:id', component:GiftComponent},
  {path: 'Home/donationTypes/:id/cart', component:ShoppingcartComponent},


 // {path: '**', component:PageNotFoundComponentComponent},
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
