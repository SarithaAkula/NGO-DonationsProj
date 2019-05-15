import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) { }
  //public donationId;
  public selectedId;
  donationTypes=[
    {"id":1,"name":"Type1"},
    {"id":2,"name":"Type2"},
    {"id":3,"name":"Type3"},
    {"id":4,"name":"Type4"},
  ]

  ngOnInit() {
  }

  onSelect(donationType){
    this.router.navigate(['/donationTypes',donationType.id])
  }
}


