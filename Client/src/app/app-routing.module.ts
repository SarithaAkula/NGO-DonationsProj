import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonationsComponent } from './donations/donations.component';
import { GiftComponent } from './gift/gift.component';


const routes: Routes = [
  {path:'', redirectTo: '/donations', pathMatch:'full'},
  {path:'donations',component:DonationsComponent},
  {path:'donations/:id',component:GiftComponent}
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
