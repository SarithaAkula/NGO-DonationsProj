import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../shared/model/ShoppingCart';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {


  public items=JSON.parse(localStorage.getItem("items"));

  constructor() { 
    
  }

  ngOnInit() {
  
  }

}
