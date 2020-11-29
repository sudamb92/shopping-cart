import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';


const routes: Routes = [{
  path: 'products',
  component: ProductListComponent,
}, {
  path: 'cartitem',
  component: CartItemComponent
}, {
  path: '',
  redirectTo: 'products',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
