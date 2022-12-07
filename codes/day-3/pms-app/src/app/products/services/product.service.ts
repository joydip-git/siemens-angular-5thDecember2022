import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProductService {
  private url = 'http://localhost:3000/products'
  constructor(private _http: HttpClient) {

  }
  add() {

  }
  update() {

  }
  delete(id: number) {

  }
  getProduct(id: number) {

  }
  getProducts() {
    this._http.get(this.url)
  }
}
