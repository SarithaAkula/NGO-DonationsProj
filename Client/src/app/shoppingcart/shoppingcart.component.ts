import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../shared/model/ShoppingCart';
import { forEach } from '@angular/router/src/utils/collection';

import { ShoppingcartService } from '../shoppingcart.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {


  public items=JSON.parse(localStorage.getItem("items"));
  public total=0;

  constructor(private _shoppingcartservice: ShoppingcartService,
    private router: Router
    ) { 
    
  }

  ngOnInit() {
    this.items.forEach(element => {
      this.total =  this.total+element.price;
    });
  }

  onSubmit(){
    this.items.forEach(element => {
      this._shoppingcartservice.addOrder(element)
      .subscribe(
        response => 
        console.log('Success!', response),
        error => console.error('Error!', error)
      );
    });

    this.router.navigate(["./home/UserView"])
    localStorage.removeItem("items");
  }
}
