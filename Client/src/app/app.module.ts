import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { DonationsComponent } from './donations/donations.component';
import { GiftComponent } from './gift/gift.component';
import { AddDonationTypeComponent } from './add-donation-type/add-donation-type.component';
import { UpdateDonationComponent } from './update-donation/update-donation.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShoppingcartComponent,
    DonationsComponent,
    GiftComponent,
    AddDonationTypeComponent,
    UpdateDonationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
