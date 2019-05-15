import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { DonationsComponent } from './donations/donations.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    
    ShoppingcartComponent,
    
    DonationsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
