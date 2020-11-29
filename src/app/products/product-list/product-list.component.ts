import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from './../../cart-item/cart.service';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any;
  searchProduct: any;
  
  constructor(readonly productsService: ProductsService, 
    readonly cartService: CartService,
    readonly sharedService: SharedService) { 
      this.searchProduct = '';
    }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(response => {
      if (response.status.toLowerCase() === 'success') {
        this.products = response.data; 
      }
    });
  }

  /**
   * add product to cart list 
  */
  addToCart(product) {
    this.cartService.addItemToCart(product).subscribe(response => {
      if (response.status.toLowerCase() === 'success') {
        this.sharedService.updateCartListCount();
      }
    });
  }
}
