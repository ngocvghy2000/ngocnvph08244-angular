import { Injectable } from "@angular/core";
import { Sanpham } from "../sanpham";
import { Data } from "../data";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class ProductService {
  products = Data;
  // products : Sanpham;
  api = "https://5e7b63700e04630016333282.mockapi.io";
  constructor(private http: HttpClient) {}

  getListProduct(): Observable<Sanpham[]> {
    return this.http.get<Sanpham[]>(`${this.api}/product`);
  }
  addProduct(sp) {
    let newObj = { id: 6, ...sp };
    this.products.push(newObj);
  }
  getProduct(id){
    // return this.products.find(product => product.id == id);
    // return this.http.get<Sanpham>.find(products => products.id == id).(`${this.api}/product`);
  }
}
