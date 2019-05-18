import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonationsComponent } from './donations/donations.component';
import { GiftComponent } from './gift/gift.component';
import { AppComponent } from './app.component';
import { AddDonationTypeComponent } from './add-donation-type/add-donation-type.component';
import {ShoppingcartComponent} from './shoppingcart/shoppingcart.component';
import {UpdateDonationComponent} from './update-donation/update-donation.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  // {path:'home',component:AppComponent},
  {path:'donations',component:DonationsComponent},
  {path:'gift/:id',component:GiftComponent},
  {path:'addDonationType',component:AddDonationTypeComponent},
  {path:'shoppingcart',component:ShoppingcartComponent},
  {path:'donations/updateDonation/:id',component:UpdateDonationComponent}


    // children:[
    //   {path:'Add',component:AddDonationTypeComponent},
    //   {path:'Delete',component:DeleteDonationTypeComponent}
    //   ]
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
