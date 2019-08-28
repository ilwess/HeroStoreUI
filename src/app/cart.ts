import { Product } from './product'; 
import { Injectable, OnInit } from '@angular/core';

@Injectable( {providedIn: 'root'})
export class Cart{
    private products : Product[];

    constructor(){
        this.products = [];
    }

    public GetProductsFromCart() : Product[]{
        return this.products;
    }

    public AddToCart(prod : Product) : void {
        if(prod){
            this.products.push(prod);
        }
    }

    public DeleteFromCart(prod : Product) : void {
        if(prod){
            const index = this.products.indexOf(prod);
            this.products.splice(index, index);
        }
    }

    public ClearCart() : void {
        this.products = [];
    }
}