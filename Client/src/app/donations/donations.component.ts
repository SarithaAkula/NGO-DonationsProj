import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service'
import { user } from '../shared/model/user';
import { DonationsService } from '../donations.service'

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

   public donationTypes = [];
   public click = false;

  public user = JSON.parse(localStorage.getItem("user"));
  constructor(private route: ActivatedRoute, private router: Router, 
    private _userService: UserService, private _donationsService: DonationsService) {

  }

  ngOnInit() {

    while(JSON.parse(localStorage.getItem("changed"))){
      location.reload();
      localStorage.setItem("changed", "false");
    }
    this._donationsService.getData()
    .subscribe( data => this.donationTypes = data);

  }
    

  onSelect(donationType){
    //this.click =  true;
    this.router.navigate(["./gift",donationType._id]);
  }


  gotoCart(){
    this.router.navigate(["./shoppingcart"]);
  }

}
