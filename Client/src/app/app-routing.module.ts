import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonationsComponent } from './donations/donations.component';
import { GiftComponent } from './gift/gift.component';
import { AppComponent } from './app.component';
import { DonationsManagmentComponent } from './donations-managment/donations-managment.component';
import { DonationsManagmentDetailsComponent } from './donations-managment-details/donations-managment-details.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  // {path:'home',component:AppComponent},
  {path:'donations',component:DonationsComponent},
  {path:'donations/donationMgt',component:DonationsManagmentComponent},
  {path:'donations/donationMgt/:donationId',component:DonationsManagmentDetailsComponent},
  {path:'gift/:id',component:GiftComponent}
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
