import { Component, OnInit } from "@angular/core";
import { Sanpham } from "../sanpham";
import { ProductService } from "../product-service/product.service";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Sanpham[];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.show();
  }

  show() {
    this.productService.getListProduct().subscribe(response => (this.products = response));
    console.log(this.products);
  }
}
