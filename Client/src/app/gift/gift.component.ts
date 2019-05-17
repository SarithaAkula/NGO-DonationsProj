import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { Donations } from '../shared/model/Donations';
import {DonationsService} from '../donations.service';
import { ShoppingCart } from '../shared/model/ShoppingCart';
import { UserService } from '../user.service'

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent  {
  public donationId: string;
  public donations : Donations;
  public userid: string;
  public shoppingCartModel = new ShoppingCart("","",null,"",null,null, new Date());
  public submitted:boolean;

  constructor( private route:ActivatedRoute, private router:Router, 
    private _userService: UserService,private _donationsService: DonationsService) 
  {

    this.route.paramMap.subscribe((params: ParamMap) => {
        let did = params.get('donationid');
        this.donationId = did;
    });

    this.route.parent.params.subscribe(params => {
      this.userid = params["userid"];
    });

    this._userService.getDetail(this.userid).subscribe(data =>{
      this.shoppingCartModel.username = data.firstName + " " + data.LastName;
      this.shoppingCartModel.email = data.email;
    })


    this._donationsService.getDetail(this.donationId)
    .subscribe( data => {
      let donation = data;
      this.shoppingCartModel.donnationType = data.donationType;
    });

    
    
    this.submitted = false;
  }

  ngonit(){
    
  }

  gotoCart(){
    let sp = this.shoppingCartModel;
    console.log(sp);
    this.submitted = true;
  }
}
