import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router';
import { user } from '../shared/model/user';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  public users = [];

  constructor(private router:Router, private _userService: UserService) {
    //location.reload();
    this._userService.getData()
    .subscribe( data => this.users = data);
  }

 ngOnInit(){
    while(JSON.parse(localStorage.getItem("changed"))){
      location.reload();
      localStorage.setItem("changed", "false");
    }
    //location.reload();
  }

  onSelect(user){
    this.router.navigate(['/user', user._id]);
  }

  delete(id){
    this._userService.delete(id).subscribe(
      Response => console.log("successs!", Response)
    );
    this.router.navigate(['./user']);
    location.reload();
  }

  addUser(){
    this.router.navigate(['./signup']);
  }

}
