import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Donations } from '../shared/model/Donations';
import {DonationsService} from '../donations.service';
import { ShoppingCart } from '../shared/model/ShoppingCart';
import { UserService } from '../user.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent  {
  public donationId: string;
  public donations : Donations;
  cart = [];
  public storedcart = JSON.parse(localStorage.getItem("items"));
  public user = JSON.parse(localStorage.getItem("user"));
  public shoppingCartModel = new ShoppingCart(this.user.firstName,this.user.lastName,null,this.user.email,"",null,null,new Date());
  public submitted:boolean;

  constructor( private route:ActivatedRoute, private router:Router, 
    private _userService: UserService,private _donationsService: DonationsService,
    private _location: Location) 
  {

    this.route.paramMap.subscribe((params: ParamMap) => {
        let did = params.get('giftid');
        this.donationId = did;
    });


    this._donationsService.getDetail(this.donationId)
    .subscribe( data => {
      let donation = data;
      this.donations = donation;
      this.shoppingCartModel.donationType = donation.donationType;
      console.log(donation.donationType);
    });

    
    
    this.submitted = false;
  }

  ngonit(){
    
  }
  goBackDonation(){
    this._location.back();
  }
  addtoCart(){
    var x = document.getElementById("myCheck").checked;
    //console.log(x);
    this.shoppingCartModel.monthly = x;
    let sp = this.shoppingCartModel;
    if(this.storedcart === null){
      this.cart.push(sp);
      localStorage.setItem("items", JSON.stringify(this.cart));
    }else{
      this.storedcart.push(sp);
      localStorage.setItem("items", JSON.stringify(this.storedcart));  
    }
    this._location.back();
    /*let price = this.shoppingCartModel.price;
    sp.price = price;
    console.log(sp);
    this.submitted = true;
    this.cart.push(sp);*/
    //console.log(JSON.parse(localStorage.getItem("items")));
  }

  gotoCart(){
    this.router.navigate(["./shoppingcart"]);
  }
}
