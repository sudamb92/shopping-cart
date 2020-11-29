import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FilterItemPipe } from './filter-item.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartItemComponent,
    ProductListComponent,
    NavBarComponent,
    FilterItemPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
