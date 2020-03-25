import { Component, OnInit } from "@angular/core";
import { Sanpham } from "../sanpham";
import {ProductService} from "../product-service/product.service";

@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {
  constructor(
     private productService : ProductService
  ) {}

  ngOnInit() {
   this.show()
  }
  sp : Sanpham[];
  removeSp(sp) {
    this.sp = this.sp.filter(s => s.id != sp.id);
  }
  show(){
     this.productService.getListProduct().subscribe(response => this.sp = response);
  }
 
}
