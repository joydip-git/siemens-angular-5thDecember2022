import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductListComponent,
    ViewProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [ProductListComponent],
  providers: [ProductService]
})
export class ProductsModule { }
