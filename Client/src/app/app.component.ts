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
  public login = localStorage.getItem("login");
  public admin = localStorage.getItem("admin");
 
  constructor(private router:Router){
    
  }


  logout(){
    this.router.navigate(['./home'])
    localStorage.clear();
  }
  
}
