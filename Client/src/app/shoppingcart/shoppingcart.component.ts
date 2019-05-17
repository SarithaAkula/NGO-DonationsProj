import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../shared/model/ShoppingCart';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  @Input() item: ShoppingCart;
  constructor() { }

  ngOnInit() {
  }

}
