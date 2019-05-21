import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    while(JSON.parse(localStorage.getItem("changed"))){
      location.reload();
      localStorage.setItem("changed", "false");
    }
  }

}
