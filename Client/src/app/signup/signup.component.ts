import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ForbiddenNameValidator } from '../shared/user-name.validator';
import { PasswordValidator } from '../shared/password.validator';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registrationForm: FormGroup;
  /* registrationForm = new FormGroup({
     userName: new FormControl('Remya'),
     password: new FormControl(''),
     confirmPassword: new FormControl(''),
     address: new FormGroup({
       city: new FormControl(''),
       state: new FormControl(''),
       postalCode: new FormControl('')
     })
  });*/
  constructor(private fb: FormBuilder, private _signupService: SignupService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      password: [''],
      confirmPassword: [''],
      email: [''],
      address1: [''],
      address2: [''],
      city: [''],
      state: [''],
      postalCode: [''],
      country:[''],
      urbanization:['',[Validators.required]],
      role:['',[Validators.required]]
    }, { validator: PasswordValidator });

    /*this.registrationForm.get('subscribe').valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });*/
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get urbanization() {
    return this.registrationForm.get('urbanization');
  }

  get role() {
    return this.registrationForm.get('role');
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this._signupService.signup(this.registrationForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
  }

}
