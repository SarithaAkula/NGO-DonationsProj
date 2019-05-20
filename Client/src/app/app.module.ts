import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserService } from './user.service'

import { SignupComponent} from './signup/signup.component'
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './signin/signin.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { DonationsComponent } from './donations/donations.component';
import { GiftComponent } from './gift/gift.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { DonationsManagmentComponent } from './donations-managment/donations-managment.component';
import { DonationsManagmentDetailsComponent } from './donations-managment-details/donations-managment-details.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    UserComponent,
    UserDetailComponent,
    HomeComponent,
    DonationsComponent,
    GiftComponent,
    ShoppingcartComponent,
    DonationsManagmentComponent,
    DonationsManagmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
