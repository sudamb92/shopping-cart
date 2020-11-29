import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  cartItemCount: number;

  constructor(readonly productsService: ProductsService, 
    readonly router: Router, 
    readonly sharedService: SharedService) { 
    this.cartItemCount = 0;
  }

  ngOnInit(): void {
    this.getCartListCount();
  }

  getCartListCount(): void {
    this.sharedService.cartItemSubject.subscribe(cartItemCount => {
      this.cartItemCount = cartItemCount;
    });
  }

  routeToCartItem() {
    this.router.navigateByUrl('/cartitem');
  }
}
