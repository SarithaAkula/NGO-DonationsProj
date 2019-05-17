import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { Donations } from '../Donations';
import {DonationsService} from '../donations.service';


@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent  {
  public donationId: string;
  public donations: Donations;
  public details=true;
  

  constructor( private route:ActivatedRoute, private router:Router, private _donationsService: DonationsService) 
  {
    this.route.paramMap.subscribe((params: ParamMap) => {
    let id = params.get('id');
    this.donationId = id;
    });
    this._donationsService.getDetail(this.donationId).subscribe( data => {
      let donation = data;
      this.donations = donation;
    });
    
  }
}


  //   this.registrationForm= this.fb.group({
  //     'GENERALDONATIONFUND':new FormControl('',[Validators.required, Validators.minLength(2)]),
  //     'RUNFORTHESON2017':new FormControl('',[Validators.required,Validators.minLength(1)]),
  //     'MISSIONTRIPSPONSORSHIP':new FormControl('',[Validators.required,Validators.minLength(1)]),
  //     'MEMORIALGIFT':new FormControl('',[Validators.required, Validators.minLength(1)]),
  //   });
  // }
  // get GENERALDONATIONFUND(){return this.registrationForm.get('GENERALDONATIONFUND');}
  // get RUNFORTHESON2017(){return this.registrationForm.get('RUNFORTHESON2017');}
  // get MISSIONTRIPSPONSORSHIP(){return this.registrationForm.get('MISSIONTRIPSPONSORSHIP');}
  // get MEMORIALGIFT(){return this.registrationForm.get('MEMORIALGIFT');}


  // goBackDonation(){
  //   this.router.navigate(['donations']); //change to /donation
  // }

  // gotoCart(){
  //     this.router.navigate(['shoppingcart']); //change to /donation 
  // }



