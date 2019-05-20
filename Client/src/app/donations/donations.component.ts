import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DonationsService } from '../donations.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  public donationTypes = [];
  constructor(private router:Router, private _donationsService: DonationsService) { }

  ngOnInit() {
    this._donationsService.getData()
    .subscribe( data => this.donationTypes = data);
  }

  onSelect(donationType){
    this.router.navigate(['./gift', donationType._id]);
  }

}
  

 
