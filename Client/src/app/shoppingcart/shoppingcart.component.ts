import { Component, OnInit } from '@angular/core';
//import { ShoppingCart } from '../ShoppingCart';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  public count=1;
  //private cart: ShoppingCart[];

	constructor(
		//private shoppingCartService: ShoppingCartService
	) { }

	ngOnInit() {
		// this.cart = this.shoppingCartService.findAll();
	}

	Add(){
    this.count++;
	}
	
	Delete(){
    this.count--;
  }

}
