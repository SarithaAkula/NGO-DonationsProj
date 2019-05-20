import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent} from './signup/signup.component'
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SigninComponent } from './signin/signin.component'
import { HomeComponent } from './home/home.component';
import { DonationsComponent } from './donations/donations.component';
import { GiftComponent } from './gift/gift.component';
import { DonationsManagmentComponent } from './donations-managment/donations-managment.component';
import { DonationsManagmentDetailsComponent } from './donations-managment-details/donations-managment-details.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { AddDonationTypeComponent } from './add-donation-type/add-donation-type.component';
import { UpdateDonationTypeComponent } from './update-donation-type/update-donation-type.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'home/UserView',component: DonationsComponent
  },
  {path:'gift/:giftid',component:GiftComponent},
  {path:'user',component:UserComponent},
  { 
    path:'user/:userid', 
    component:UserDetailComponent
  },

  {path:'donations',component:DonationsManagmentComponent},
  {path:'donationsManagmentDetails',component:DonationsManagmentDetailsComponent},
  {path:'donationsManagmentDetails/:donationId',component:UpdateDonationTypeComponent},
  {path:'shoppingcart',component:ShoppingcartComponent},
    // children:[
    //   {path:'Add',component:AddDonationTypeComponent},
    //   {path:'Delete',component:DeleteDonationTypeComponent}
    //   ]
  {path:'addDonationType',component:AddDonationTypeComponent},
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
