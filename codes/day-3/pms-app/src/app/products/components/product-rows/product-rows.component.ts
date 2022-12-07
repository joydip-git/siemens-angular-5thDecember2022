import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-rows',
  templateUrl: './product-rows.component.html',
  styleUrls: ['./product-rows.component.css']
})
export class ProductRowsComponent implements OnChanges, OnInit, OnDestroy {
  @Input('productsData') productArray?: Product[];
  @Output('deleted') onProductDeleted = new EventEmitter<number>()

  private subscription?: Subscription;

  constructor(private _service: ProductService) {
    console.log('Prows created')
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  ngOnInit(): void {
    console.log('Prows initiated')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Prows changed')
    console.log(this.productArray)
  }
  deleteProduct(id: number) {
    this.subscription = this._service
      .delete(id)
      .subscribe({
        next: (resp) => {
          console.log('deleted')
        },
        error: (err) => {
          console.log(err.message)
        },
        complete: () => {
          console.log('completed')
          this.onProductDeleted.emit(id)
        }
      })
  }
}
