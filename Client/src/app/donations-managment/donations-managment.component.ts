import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ShoppingCart } from '../ShoppingCart';
import { ShoppingCartService } from '../shopping-cart.service';

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
constructor( private route:ActivatedRoute, private router:Router, private _shoppingCartService: ShoppingCartService) { 
  this._shoppingCartService.getData()
    .subscribe( data => this.shoppingcartOrders = data);
  }  
  
delete(id){
  this._shoppingCartService.delete(id).subscribe(
    Response => console.log("successs!", Response)
  );
  location.reload();
}

allDonationTypes(){
  this.router.navigate(['./donationsManagmentDetails']);
}

}