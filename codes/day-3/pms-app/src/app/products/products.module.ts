import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductRowsComponent } from './components/product-rows/product-rows.component';
import { LowercaseTransformerPipe } from './pipes/lowercase-transformer.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    ViewProductComponent,
    AddProductComponent,
    ProductRowsComponent,
    LowercaseTransformerPipe
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [ProductListComponent],
  providers: [ProductService]
})
export class ProductsModule { }
