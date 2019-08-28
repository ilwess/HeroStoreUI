import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Cart } from '../cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products : Product[];
  private productsUrl : string = 'http://localhost:51072/api/product';
  private cartUrl : string = 'http://localhost:51072/api/cart';
  constructor(private http : HttpClient,
              public cart : Cart) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() : void {
    const o : Observable<Product[]> = this.http.get<Product[]>(this.productsUrl + '/all');
    o.subscribe(prods => this.products = prods);
    if(this.products == null){
      console.log("null");
    }
  }

  addToCart(prod : Product) : void{
    this.cart.AddToCart(prod);
  }
}
