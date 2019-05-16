import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from '../user.service';
import { user } from '../shared/model/user';
import { observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public userId: string;
  public user: user;//= new user('','','','',null,'','','','','',null,'','',null);
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private route:ActivatedRoute, private router:Router, private _userService: UserService) { }

  ngOnInit() {
    /*let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;*/
    //parapMap will give an observable 
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.userId = id;
    });


    this._userService.getDetail(this.userId).subscribe( data => {
      let user = data;
      this.user = user;
      this.registrationForm = this.fb.group({
        firstName: [user.fistName],
        lastName: [user.LastName],
        email:[user.email],
        address: [user.address1],
        city: [user.city],
        state: [user.state],
        postalCode: [user.zipcode],
        country:[user.country],
        urbanization:[user.urbanization,[Validators.required]],
        role:[user.role,[Validators.required]]
      }, { validator: PasswordValidator });
    });
     // data=>console.log(data));
     
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
 
}
