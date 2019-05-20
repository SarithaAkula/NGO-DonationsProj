import { Component, OnInit } from '@angular/core';
import { Donations } from '../Donations';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DonationManagmentService } from '../donation-managment.service';
import { ShoppingCart } from '../ShoppingCart';

@Component({
  selector: 'app-donations-managment',
  templateUrl: './donations-managment.component.html',
  styleUrls: ['./donations-managment.component.css']
})
export class DonationsManagmentComponent {
public errorMsg : string;
public shoppingcartId: string;
public donationTypes = [];
public shoppingcartOrders =[];
public details=true;
public updatedDonationOrder: ShoppingCart;
updated = false;
constructor( private route:ActivatedRoute, private router:Router, private _donationManagmentService: DonationManagmentService) { 
  this._donationManagmentService.getData()
    .subscribe( data => this.shoppingcartOrders = data);
  }  
  
onSelect(shoppingcartOrder){
  this.router.navigate(['/UpdateshoppingcartOrder', shoppingcartOrder._id]);
}

delete(id){
  this._donationManagmentService.delete(id).subscribe(
    Response => console.log("successs!", Response)
  );
  this.router.navigate(['./deletedonationType']);
  location.reload();
}

addDonationType(){
  this.router.navigate(['./adddonationType']);
}
}