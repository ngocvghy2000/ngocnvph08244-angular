import { Component, OnInit } from "@angular/core";
import { Sanpham } from "../sanpham";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  sanpham: Sanpham = {
    name: "sua",
    price: 456,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
    status: true
  };
  changeName(){
    this.sanpham.name="ahihi";
  }
}
