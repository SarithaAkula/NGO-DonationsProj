import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../shared/model/ShoppingCart';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DonationsService } from '../donations.service';


@Component({
  selector: 'app-donations-managment-details',
  templateUrl: './donations-managment-details.component.html',
  styleUrls: ['./donations-managment-details.component.css']
})
export class DonationsManagmentDetailsComponent implements OnInit {
  public donationTypes = [];
  
  
  constructor(private route:ActivatedRoute, private router:Router, private _donationsService: DonationsService) {
    
    }
  
  ngOnInit() {
    while(JSON.parse(localStorage.getItem("changed"))){
      location.reload();
      localStorage.setItem("changed", "false");
    }
    this._donationsService.getData()
    .subscribe( data => this.donationTypes = data);
  }
  
  addDonationType(){
    this.router.navigate(['./addDonationType']);
  }
  onSelect(donationTypes){
    this.router.navigate(['/donationsManagmentDetails', donationTypes._id]);
  }
  delete(id){
    this._donationsService.delete(id).subscribe(
      Response => console.log("successs!", Response)
    );
   // this.router.navigate(['./deletedonationType']);
    location.reload();
  }
  
}