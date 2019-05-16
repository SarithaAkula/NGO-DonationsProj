import { Component, OnInit } from '@angular/core';
import { signin } from '../shared/model/signin'
import { SigninService } from '../signin.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{

  signinModel = new signin('','');
  submitted = false;
  errorMsg = "";

  constructor(private _signinService: SigninService,private router:Router) { }
  onSubmit(){
    console.log(this.signinModel);
    this.submitted = true;
    this._signinService.signin(this.signinModel)
    .subscribe(
      Response => console.log("successs!", Response)
    );
    this.router.navigate(['./user']);
  }

  signup(){
    this.router.navigate(['./signup']);
  }


}
