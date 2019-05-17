import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service'
import { user } from '../shared/model/user';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  public userId: string;
  public user: user;


  constructor(private route: ActivatedRoute, private router: Router, private _userService: UserService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('userid');
      this.userId = id;
    });
    this._userService.getDetail(this.userId).subscribe( data => {
      let user = data;
      this.user = user;
    });
  }
}
