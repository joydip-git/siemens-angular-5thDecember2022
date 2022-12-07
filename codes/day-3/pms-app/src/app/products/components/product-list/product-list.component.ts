import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products?: any[];
  errorMessage = ''
  loadingComplete = false

  constructor(private _productService: ProductService) {
    const obs = this._productService.getProducts()
    obs.subscribe({
      next: (resp) => {
        this.products = resp as any[]
        this.errorMessage = ''
        this.loadingComplete = true
      },
      error: (err) => {
        this.products = undefined
        this.errorMessage = err.message
        this.loadingComplete = true
      },
      // complete: () => {
      //   console.log('completed')
      // }
    })
  }
}
