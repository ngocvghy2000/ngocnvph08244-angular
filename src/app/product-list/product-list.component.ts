import { Component, OnInit } from "@angular/core";
import { Sanpham } from "../sanpham";
import { Data } from "../data";
// import {  product-manager } from "../product-manager"
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  products = Data;
  tenSp : Sanpham;
  remove(sp){
    this.products = this.products.filter(a => a.price != sp);
  }
}
