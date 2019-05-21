import { Component, OnInit } from '@angular/core';
import { Donations } from '../shared/model/Donations';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ShoppingcartService } from '../shoppingcart.service';
import { ShoppingCart } from '../shared/model/ShoppingCart';
import { DonationsService } from '../donations.service'

@Component({
  selector: 'app-donations-managment',
  templateUrl: './donations-managment.component.html',
  styleUrls: ['./donations-managment.component.css']
})
export class DonationsManagmentComponent implements OnInit{
public errorMsg : string;
public shoppingcartId: string;
public donationTypes = [];
public shoppingcartOrders =[];
public details=true;
public updatedDonationOrder: ShoppingCart;
updated = false;
public user = JSON.parse(localStorage.getItem("user"));
constructor( private route:ActivatedRoute, private router:Router, private _shoppingcartService: ShoppingcartService) { 
  this._shoppingcartService.getData()
    .subscribe( data => this.shoppingcartOrders = data);
  }  

  ngOnInit(){
    while(JSON.parse(localStorage.getItem("changed"))){
      location.reload();
      localStorage.setItem("changed", "false");
    }
  }
  
onSelect(shoppingcartOrder){
  this.router.navigate(['/donations', shoppingcartOrder._id]);
}

delete(id){
  this._shoppingcartService.delete(id).subscribe(
    Response => console.log("successs!", Response)
  );
  this.router.navigate(['./deletedonationType']);
  location.reload();
}

allDonationTypes(){
  this.router.navigate(['./donationsManagmentDetails']);
}
}