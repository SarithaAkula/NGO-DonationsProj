import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent} from './signup/signup.component'
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SigninComponent } from './signin/signin.component'
import { HomeComponent } from './home/home.component';
import { DonationsComponent } from './donations/donations.component';
import { GiftComponent } from './gift/gift.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'home/:userid',component: DonationsComponent,
    children:[
      {path:'gift/:donationid',component:GiftComponent}
    ]
  },
  {path:'user',component:UserComponent},
  { 
    path:'user/:userid', 
    component:UserDetailComponent
  }
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
