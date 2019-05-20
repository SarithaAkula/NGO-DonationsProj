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
  public userid: string;
  cart = [];
  public storedcart = JSON.parse(localStorage.getItem("items"));
  public shoppingCartModel = new ShoppingCart("","",null, "","",null,true,"");
  public submitted:boolean;

  constructor( private route:ActivatedRoute, private router:Router, 
    private _userService: UserService,private _donationsService: DonationsService,
    private _location: Location) 
  {

    this.route.paramMap.subscribe((params: ParamMap) => {
        let did = params.get('giftid');
        this.donationId = did;
    });

    this.route.parent.params.subscribe(params => {
      this.userid = params["userid"];
    });

    this._userService.getDetail(this.userid).subscribe(data =>{
      this.shoppingCartModel.firstName = data.firstName;
      this.shoppingCartModel.lastName = data.lastName;
      this.shoppingCartModel.email = data.email;
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
