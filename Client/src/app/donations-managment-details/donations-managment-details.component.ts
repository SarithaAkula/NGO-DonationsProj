import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../ShoppingCart';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DonationManagmentService } from '../donation-managment.service';

@Component({
  selector: 'app-donations-managment-details',
  templateUrl: './donations-managment-details.component.html',
  styleUrls: ['./donations-managment-details.component.css']
})
export class DonationsManagmentDetailsComponent implements OnInit {

  public shoppingcartId:string;
  public shoppingcart:ShoppingCart;
  updated = false;
  constructor(private route:ActivatedRoute, private router:Router, private _donationManagmentService: DonationManagmentService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('shoppingcartId');
      this.shoppingcartId = id;
   });
   this._donationManagmentService.getDetail(this.shoppingcartId).subscribe( data => {
    let shoppingcart = data;
    this.shoppingcart = shoppingcart;
  });
  }
  updateDetails() {
    //console.log(this.user);
    let shoppingcart = this.shoppingcart;
    console.log(shoppingcart);
    this.updated = true;
    this._donationManagmentService.update(this.shoppingcartId, shoppingcart)
    .subscribe(
      Response => console.log("successs!", Response)
    );
    this.router.navigate(['./donations/donationMgt']);
  }
  ngOnInit() {
  }

}
