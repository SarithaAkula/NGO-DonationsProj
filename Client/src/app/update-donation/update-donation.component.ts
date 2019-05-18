import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DonationsService } from '../donations.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-update-donation',
  templateUrl: './update-donation.component.html',
  styleUrls: ['./update-donation.component.css']
})
export class UpdateDonationComponent implements OnInit {
  public updateForm:FormGroup;
  public donationId;
  public donations;
  constructor(private route:ActivatedRoute, private router:Router,private _donationsService: DonationsService,private fb:FormBuilder) {    
    this.route.paramMap.subscribe((params: ParamMap) => {
    let id = params.get('id');
    this.donationId = id;
    });
    this._donationsService.getDetail(this.donationId).subscribe( data => {
      let donation = data;
      this.donations = donation;
      console.log(this.donations);
    }); 
  }
  
  ngOnInit() {
    this.updateForm = this.fb.group({
      donationType: ['', [Validators.required,Validators.minLength(1)]]
    });}
  
  get donationType() {
      return this.updateForm.get('donationType') as FormArray;
  };


  gotoDonation(){
    this.router.navigate(['./donations']);
  }

  onSubmit() {
    console.log(this.updateForm.value);
    this._donationsService.update(this.donationId,this.updateForm.value)
      .subscribe(
        response => {
          this.router.navigate(['./donations']);
        },
        error => console.error('Error!', error)
      );

      this.updateForm.reset()
  } 
}
