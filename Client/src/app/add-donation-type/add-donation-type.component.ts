import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DonationsService } from '../donations.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'app-add-donation-type',
  templateUrl: './add-donation-type.component.html',
  styleUrls: ['./add-donation-type.component.css']
})
export class AddDonationTypeComponent implements OnInit {
  public addTypeForm:FormGroup;
  constructor(private router:Router, private _donationsService: DonationsService,private fb:FormBuilder) { }

  ngOnInit() {
    this.addTypeForm = this.fb.group({
      donationType: ['', [Validators.required,Validators.minLength(1)]]
    });}
  
  get donationType() {
      return this.addTypeForm.get('donationType') as FormArray;
  };


  gotoDonation(){
    this.router.navigate(['./donations']);
  }

  onSubmit() {
    console.log(this.addTypeForm.value);
    this._donationsService.add(this.addTypeForm.value)
      .subscribe(
        response => {
          this.router.navigate(['./donations']);
        },
        error => console.error('Error!', error)
      );

      this.addTypeForm.reset()
  } 

}
