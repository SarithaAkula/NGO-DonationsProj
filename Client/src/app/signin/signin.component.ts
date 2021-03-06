import { Component, OnInit } from '@angular/core';
import { signin } from '../shared/model/signin';
import { SigninService } from '../signin.service';
import { Router } from '@angular/router';
import { user } from '../shared/model/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{

  signinModel = new signin('','');
  submitted = false;
  errorMsg = "";
  user = new user('','','','',null,'','','','','',null,'','',null);
  id:string;



  constructor(private _signinService: SigninService,private router:Router) { }
  onSubmit(){
    console.log(this.signinModel);
    this.submitted = true;
    this._signinService.signin(this.signinModel)
    .subscribe(
      Response => {
        let id = Response.user._id;
        this.id = id;
        localStorage.setItem("user", JSON.stringify(Response.user));
        localStorage.setItem("login", "true");
        localStorage.setItem("changed", "true");

        console.log(Response.user.role)
        if(Response.user.role == 'Admin'){
          localStorage.setItem("admin", "true");
          this.router.navigate(['./user']);
          
        }else{
          localStorage.setItem("admin", "false");
          this.router.navigate(['/home/UserView']);
          
        }
      }
    );


    
    //this.router.navigate(['./user']);
  }

  signup(){
    this.router.navigate(['./signup']);
  }


}
