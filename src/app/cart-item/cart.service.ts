import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: Array<any>;

  constructor() { 
    this.cartList = [];
  }

  /**
   * return cart list subject
   */
  getCartListItem() {
    // NOTE: remove below code once service is ready
    return of({
      status: 'success',
      data: this.cartList
    });
    
    // NOTE: Uncomment below code once service is ready
    //return this.http.get(environment.APIS.cartItem).pipe(catchError(this.handleError));
  }

  /**
   * 
   * add product to cart list
   */
  addItemToCart(product): Observable<any> {
    // NOTE: cartlist array for maintaining cart list item,removed below block of code once service is ready
    let itemPresentInCartList = false;
    // If item is present in cart list then increase quantity of item,
    this.cartList.filter(item => {
      if (product.id === item.id) {
        itemPresentInCartList = true;
        ++item.quantity
      }
    });
    // if item is not present in cart list then add item in cart list
    itemPresentInCartList ? '' : this.cartList.push(product);
    return of({
      status: 'success',
      message: 'Added item to cart'
    })

    // NOTE: uncomment below code once service is ready
    // return this.http.post(environment.APIS.products, product).pipe(catchError(this.handleError));
  }

  /**
   * 
   * delete item from cart list
   */
  deleteItemFromCart(product): Observable<any> {
    // NOTE: maintaining cart list after delete product, removed this code once service is ready
    this.cartList = this.cartList.filter(item => {
      if(product.id !== item.id) {
        return item;
      }
    });
    return of({
      "status": "success",
      "message": "Deleted successfully"
    });      
    //NOTE: uncomment below code once service is ready
    // return this.http.delete(environment.APIS.products, {
    //   params: product.id
    // }).pipe(catchError(this.handleError));
  }
}
