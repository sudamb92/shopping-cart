import { Injectable } from '@angular/core';
import {  Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public cartItemSubject = new Subject<number>();
  cartListItemCount: number;

  constructor() { 
    this.cartListItemCount = 0;
  }

    /**
   * 
   * update cart list item count
   */
  updateCartListCount(updatedCartCount = 1) {
    this.cartListItemCount += updatedCartCount;
    this.cartItemSubject.next(this.cartListItemCount);
  }

  /**
   * 
   * handle service side error 
   */
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
