import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router, Params } from '@angular/router';
import { Donations } from '../donations';
import { DonationsService } from '../donations.service';


@Component({
  selector: 'app-update-donation-type',
  templateUrl: './update-donation-type.component.html',
  styleUrls: ['./update-donation-type.component.css']
})
export class UpdateDonationTypeComponent implements OnInit {
  public donations:Donations;
  public donationId:string;
  updated = false;
  constructor( private route:ActivatedRoute, private router:Router, private _donationsService: DonationsService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('donationId');
      this.donationId = id;
    });
     // data=>console.log(data));
     this._donationsService.getDetail(this.donationId).subscribe( data => {
      let donations = data;
      this.donations = donations;
    });
   }
   updateDetails() {
    let donations = this.donations;
    console.log(donations);
    this.updated = true;
    this._donationsService.update(this.donationId, donations)
    .subscribe(
      Response => console.log("successs!", Response)
    );
    this.router.navigate(['./donationsManagmentDetails']);
  }
  ngOnInit() {
  }

}
