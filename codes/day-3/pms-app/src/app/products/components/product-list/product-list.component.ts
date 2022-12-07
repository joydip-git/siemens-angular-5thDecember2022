import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products?: Product[];
  errorMessage = ''
  loadingComplete = false

  constructor(private _productService: ProductService) {
    console.log('PL created')
  }

  ngOnDestroy(): void {
    console.log('PL destroyed')
  }

  ngOnInit(): void {
    console.log('PL initiated')
    this.fetchData()
  }

  onDeletion(id?: number) {
    console.log(id)
    //this.fetchData()
    const index = this.products?.findIndex(
      (p: Product) => p.id === id
    )
    if (index)
      this.products?.splice(index, 1)
  }

  fetchData() {
    const obs = this._productService.getProducts()
    obs.subscribe({
      next: (resp) => {
        this.products = resp
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
