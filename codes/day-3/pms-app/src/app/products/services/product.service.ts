import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

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
    return this._http.delete(`${this.url}/${id}`)
  }
  getProduct(id: number) {
    return this._http.get<Product>(`${this.url}/${id}`)
  }
  getProducts() {
    const obs: Observable<Product[]> = this._http.get<Product[]>(this.url)
    return obs
  }
}
