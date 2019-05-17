import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ParamMap, ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from '../user.service';
import { user } from '../shared/model/user';
import { observable, Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  public userId: string;
  public user: user;//= new user('','','','',null,'','','','','',null,'','',null);
  public details=true;
  public updatedUser: user;

  updated = false;
  //@Input() user: user;
  roles = Array<String>();

  constructor( private route:ActivatedRoute, private router:Router, private _userService: UserService) { 
    this.roles.push("Admin");
    this.roles.push("User");
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('userid');
      this.userId = id;
    });
     // data=>console.log(data));
     this._userService.getDetail(this.userId).subscribe( data => {
      let user = data;
      this.user = user;
    });
  }

  updateDetails() {
    //console.log(this.user);
    let user = this.user;
    console.log(user);
    this.updated = true;
    this._userService.update(this.userId, user)
    .subscribe(
      Response => console.log("successs!", Response)
    );
    this.router.navigate(['./user']);
    //location.reload();
  }


 
}
