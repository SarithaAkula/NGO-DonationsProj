import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationService } from '../donation.service';
import { Donations } from '../Donations';

@Component({
  selector: 'app-do',
  templateUrl: './do.component.html',
  styleUrls: ['./do.component.css']
})
export class DoComponent implements OnInit {
  public donationTypes:any//:Donations[]=[];
  
  constructor(private router:Router, private _donationService:DonationService) {
    // this._donationService.getData()
    // .subscribe(data=>this.data=data);//this.donationTypes = data
    // console.log(this.data);

    
    
   }

  ngOnInit() {
    this._donationService.getData().subscribe(data => {
      this.donationTypes=data; 
      console.log("Donation types: ");
      console.log(this.donationTypes);
      console.log("End");
    });
    
    //this.donationTypes=[{_id: "2", donationType: "i@email", __v: 0}]
  }

  onSelect(donationType){
    this.router.navigate(['Home/donationTypes',donationType._id]);
  }

}
