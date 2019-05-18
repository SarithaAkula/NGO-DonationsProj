import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Donations } from '../Donations'
import {DonationService} from '../donation.service';

import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
//import {RegistrationService} from '../registration.service';


@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {
  public typeId;
  public registrationForm;
  public Donations:Donations;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private _donationService: DonationService){}
  

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id =parseInt(params.get('id'));
      this.typeId=id;
    });
    
    this._donationService.getDetail(this.typeId).subscribe(data =>{
      let Donations=data;
      this.Donations=Donations;
    })


    this.registrationForm= this.fb.group({
    //   'GENERALDONATIONFUND':new FormControl('',[Validators.required, Validators.minLength(2)]),
    //   'RUNFORTHESON2017':new FormControl('',[Validators.required,Validators.minLength(1)]),
    //   'MISSIONTRIPSPONSORSHIP':new FormControl('',[Validators.required,Validators.minLength(1)]),
    //   'MEMORIALGIFT':new FormControl('',[Validators.required, Validators.minLength(1)]),
     });
  }
  // get GENERALDONATIONFUND(){return this.registrationForm.get('GENERALDONATIONFUND');}
  // get RUNFORTHESON2017(){return this.registrationForm.get('RUNFORTHESON2017');}
  // get MISSIONTRIPSPONSORSHIP(){return this.registrationForm.get('MISSIONTRIPSPONSORSHIP');}
  // get MEMORIALGIFT(){return this.registrationForm.get('MEMORIALGIFT');}
  updateDetails(){ //id?
    let Donation=this.Donations;
    console.log(Donation);
    this._donationService.update(this.typeId,Donation)
    .subscribe(
      Response=>console.log("successs!", Response)
    )
    this.router.navigate(['Home/donationTypes']);//?donation management
  }


  goBackDonation(){
    this.router.navigate(['Home/donationTypes']); //change to /donation
  }

  gotoCart(){
      this.router.navigate(['Home/donationTypes/:id/cart']); //change to /donation 
  }


}
