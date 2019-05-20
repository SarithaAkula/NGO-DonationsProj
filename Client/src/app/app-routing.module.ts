import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DonationsComponent } from './donations/donations.component';
import { GiftComponent } from './gift/gift.component';
import { AppComponent } from './app.component';
import { AddDonationTypeComponent } from './add-donation-type/add-donation-type.component';
import { DonationsManagmentComponent } from './donations-managment/donations-managment.component';
import { DonationsManagmentDetailsComponent } from './donations-managment-details/donations-managment-details.component';
import { UpdateDonationTypeComponent } from './update-donation-type/update-donation-type.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  // {path:'home',component:AppComponent},
  {path:'donations',component:DonationsComponent},
  {path:'donations/donationMgt',component:DonationsManagmentComponent},
  {path:'donations/donationMgt/:donationId',component:UpdateDonationTypeComponent},
  {path:'donationsManagmentDetails',component:DonationsManagmentDetailsComponent},
  {path:'gift/:id',component:GiftComponent},
    // children:[
    //   {path:'Add',component:AddDonationTypeComponent},
    //   {path:'Delete',component:DeleteDonationTypeComponent}
    //   ]
  {path:'addDonationType',component:AddDonationTypeComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
