import { Component, OnInit } from "@angular/core";
import { Sanpham } from "../sanpham";
import { ProductService } from "../product-service/product.service";
@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  product: Sanpham = new Sanpham();
  constructor(private productService: ProductService) {}

  ngOnInit() {}
  addProduct() {
    this.productService.addProduct(this.product);
  }
}
