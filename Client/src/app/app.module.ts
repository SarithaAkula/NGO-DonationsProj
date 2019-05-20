import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { DonationsComponent } from './donations/donations.component';
import { GiftComponent } from './gift/gift.component';
import { DonationsManagmentComponent } from './donations-managment/donations-managment.component';
import { DonationsManagmentDetailsComponent } from './donations-managment-details/donations-managment-details.component';
import { AddDonationTypeComponent } from './add-donation-type/add-donation-type.component';
import { UpdateDonationTypeComponent } from './update-donation-type/update-donation-type.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShoppingcartComponent,
    DonationsComponent,
    GiftComponent,
    DonationsManagmentComponent,
    DonationsManagmentDetailsComponent,
    AddDonationTypeComponent,
    UpdateDonationTypeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
