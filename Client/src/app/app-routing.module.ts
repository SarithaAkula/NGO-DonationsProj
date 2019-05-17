import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonationsComponent } from './donations/donations.component';
import { GiftComponent } from './gift/gift.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  // {path:'home',component:AppComponent},
  {path:'donations',component:DonationsComponent},
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
