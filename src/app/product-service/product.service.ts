import { Injectable } from "@angular/core";
import { Sanpham } from "../sanpham";
import { Data } from "../data";
@Injectable()
export class ProductService {
  products = Data;
  constructor() {}

  getListProduct() {
    return this.products;
  }
  addProduct(sp) {
    let newObj = { id: 6, ...sp };
    this.products.push(newObj);
  }
  getProduct(id) {
     return this.products.find(product => product.id == id);
  }
}
