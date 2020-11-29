import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { CartService } from './cart.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  cartListItem: any;
  clonecartListItem: any;
  totalPrice: number;

  constructor(readonly cartService: CartService, readonly sharedService: SharedService) {
    this.totalPrice = 0;
    this.clonecartListItem = this.cartListItem = [];
   }

  ngOnInit(): void {
    this.cartService.getCartListItem().subscribe(response => {
      if (response.status.toLowerCase() === 'success') {
        this.cartListItem = response.data;
        this.clonecartListItem = JSON.parse(JSON.stringify((response.data)));
        this.calculateTotalPrice();
      }
    });
  }

  calculateTotalPrice() {
    this.totalPrice = 0;
    this.cartListItem?.map(item => {
      let itemPricePerQuantity = item.price * item.quantity;
      this.totalPrice = this.totalPrice + itemPricePerQuantity;
    });
  }

  /**
   * 
   * increate quantity 
   */
  increaseQuantity(increamentItem) {
    const filterItem = this.clonecartListItem.filter(item => {
      return item.id === increamentItem.id;
    });
    increamentItem.quantity += 1;
    this.calculateTotalPrice();
    this.sharedService.updateCartListCount();
  }

  /**
   * 
   * reduce qunatity
   */
  decreaseQuantity(descreamentItem) {
    if (descreamentItem.quantity !== 1) {
      const filterItem = this.clonecartListItem.filter(item => {
        return item.id === descreamentItem.id;
      });
      descreamentItem.quantity -= 1;
      this.calculateTotalPrice();
      this.sharedService.updateCartListCount(-1);
    }
  }

  /**
   * delete item from cart
   */
  deleteItemFromCart(cartItem) {
    this.cartService.deleteItemFromCart(cartItem).subscribe(response => {
      if (response.status.toLowerCase() === 'success') {
        this.cartListItem = this.cartListItem.filter(item => {
          if (item.id !== cartItem.id) {
            return item;
          }
        });
        this.clonecartListItem = JSON.parse(JSON.stringify(this.cartListItem));
        this.sharedService.updateCartListCount(-cartItem.quantity);
        this.calculateTotalPrice();
      }
    });
  }
}
