import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DonationsService } from '../donations.service';
import { Donations } from '../donations';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  public donationTypes = [];
  public donations:any=[];
  constructor(private router:Router, private _donationsService: DonationsService) { 
  
  }

  ngOnInit() {
    this._donationsService.getData()
    .subscribe( data => this.donationTypes = data);
  }

  onSelect(donationType){
    this.router.navigate(['./gift', donationType._id]);
  }

  delete(id){
    this._donationsService.delete(id).subscribe(
      Response => console.log("successs!", Response)
    );
    this.router.navigate(['/donations']);
    location.reload();
  }
 

  update(id){
    
    this._donationsService.getDetail(id).subscribe( data => {
      let donation = data;
      this.donations=donation;
    });
    let donations = this.donations;
    console.log(donations);
    
    this._donationsService.update(id, donations)
    .subscribe(
      Response => console.log("successs!", Response)
    );
    this.router.navigate(['./donations']);

  }

  add(){
    this.router.navigate(['./addDonationType']);
    
  }

  goUpdatePage(donationType){
    this.router.navigate(['./donations/updateDonation',donationType._id])
  }

}
  

 
