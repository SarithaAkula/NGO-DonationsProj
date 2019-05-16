import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent} from './signup/signup.component'
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SigninComponent } from './signin/signin.component'

const routes: Routes = [
  {path:'', redirectTo: '/signin', pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'signin',component: SigninComponent},
  {path:'user',component:UserComponent},
  { 
    path:'user/:id', 
    component:UserDetailComponent
  },
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
