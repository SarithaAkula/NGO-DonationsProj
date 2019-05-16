import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users = [];

  public currentUser;


  constructor(private router:Router, private _userService: UserService) { }

  ngOnInit() {
    this._userService.getData()
    .subscribe( data => this.users = data);
  }

  onSelect(user){
    this.router.navigate(['/user', user._id]);
  }

  addUser(){
    this.router.navigate(['']);
    this.router.navigate(['./signup']);
  }

}
