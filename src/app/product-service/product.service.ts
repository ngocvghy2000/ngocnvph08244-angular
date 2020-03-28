import { Injectable } from "@angular/core";
import { Sanpham } from "../sanpham";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class ProductService {
  api = "https://5e7b63700e04630016333282.mockapi.io";
  constructor(private http: HttpClient) {}

  getListProduct(): Observable<Sanpham[]> {
    return this.http.get<Sanpham[]>(`${this.api}/product`);
  }
  getProduct(id): Observable<Sanpham> {
    return this.http.get<Sanpham>(`${this.api}/product/${id}`);
  }
  updateProduct(product): Observable<Sanpham> {
    return this.http.put<Sanpham>(`${this.api}/product/${product.id}`, product);
  }
  addProduct(product) : Observable<Sanpham>{
    return this.http.post<Sanpham>(`${this.api}/product`,product);
  }
  removeProduct(id) : Observable<Sanpham>{
    return this.http.delete<Sanpham>(`${this.api}/product/${id}`)
  }
}
