import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Cart } from '../cart';

@Component({
  selector: 'app-cartSum',
  templateUrl: './cartSum.component.html',
  styleUrls: ['./cartSum.component.css']
})
export class CartSumComponent implements OnInit {
  cartProducts : Product[] = [];
  private cartUrl : string = 'http://localhost:51072/api/cart';
  constructor(private http : HttpClient,
              public cart : Cart) { }

  ngOnInit() {
    this.getCartProducts();
  }

  getCartProducts() : void{
    this.cartProducts = this.cart.GetProductsFromCart();
  }

  deleteFromCart(prod : Product) : void{
    this.cart.DeleteFromCart(prod);
  }

  clearCart() : void{
    this.cart.ClearCart();
  }

}
