import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { CartSumComponent } from './cartSum/cartSum.component';
import { Cart } from './cart';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShopComponent,
    CartSumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Cart],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
