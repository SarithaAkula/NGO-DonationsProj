import { Component, OnInit } from '@angular/core';
import { user } from './shared/model/user'
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'NgoDonation';
  public login = JSON.parse(localStorage.getItem("login"));
  public admin = JSON.parse(localStorage.getItem("admin"));
 
  constructor(private router:Router){
    
  }


  logout(){
    this.router.navigate(['./home'])
    localStorage.clear();
  }
  
}
