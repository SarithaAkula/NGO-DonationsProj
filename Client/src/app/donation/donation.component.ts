import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {DonationService} from '../donation.service';
//import { Donation } from '../donation'


@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
 public donations;
 //public Donation:Donation;
  constructor(private router:Router, private route: ActivatedRoute, private _donationService: DonationService) {
    
   }
  
  ngOnInit() {
    console.log("Hi");
    this._donationService.getData()
    .subscribe(data => this.donations=data);
    console.log(this.donations);
  
  }

  onSelect(donationType){
    this.router.navigate(['/Home/donationTypes',donationType._id]);
  }

  delete(id){
    this._donationService.delete(id).subscribe(
      Response => console.log("successs!", Response)
    );
    this.router.navigate(['/Home/donationTypes']);
    location.reload();
  }

  // add(){
  //   this.router.navigate(['']);
  //   this.router.navigate()
  // }

  // add(id){
  //   this._donationService.getDetail(id).subscribe(
  //     Response => console.log("successs!", Response)
  //   );
  //   this.router.navigate(['/Home/donationTypes',id]);
  //   location.reload();
  
  // }
  


  // update(id) {
  //   //console.log(this.user);
  //   let Donation = this.Donation;
  //   console.log(Donation);
  //   this._donationService.update(id, Donation)
  //   .subscribe(
  //     Response => console.log("successs!", Response)
  //   );
  //   this.router.navigate(['/Home/donationTypes',id]);
  //   //location.reload();
  // }





}


