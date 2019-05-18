import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { DonationsComponent } from './donations/donations.component';
import { DonationComponent } from './donation/donation.component';
import { GiftComponent } from './gift/gift.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { DoComponent } from './do/do.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    
    ShoppingcartComponent,
    
    DonationsComponent,
    DonationComponent,
    GiftComponent,
    TestComponent,
    DoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
