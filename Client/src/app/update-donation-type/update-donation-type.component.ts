import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router, Params } from '@angular/router';
import { Donations } from '../shared/model/donations';
import { DonationManagmentService } from '../donation-managment.service';

@Component({
  selector: 'app-update-donation-type',
  templateUrl: './update-donation-type.component.html',
  styleUrls: ['./update-donation-type.component.css']
})
export class UpdateDonationTypeComponent implements OnInit {
  public donations:Donations;
  public donationId:string;
  updated = false;
  constructor( private route:ActivatedRoute, private router:Router, private _donationManagmentService: DonationManagmentService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('donationId');
      this.donationId = id;
    });
     // data=>console.log(data));
     this._donationManagmentService.getDetail(this.donationId).subscribe( data => {
      let donations = data;
      this.donations = donations;
    });
   }
   updateDetails() {
    let donations = this.donations;
    console.log(donations);
    this.updated = true;
    this._donationManagmentService.update(this.donationId, donations)
    .subscribe(
      Response => console.log("successs!", Response)
    );
    this.router.navigate(['./donationsManagmentDetails']);
  }
  ngOnInit() {
  }

}