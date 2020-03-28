import { Component, OnInit } from "@angular/core";
import { Sanpham } from "../sanpham";
import { ProductService } from "../product-service/product.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.show();
  }
  sp: Sanpham[];

  show() {
    this.productService
      .getListProduct()
      .subscribe(response => (this.sp = response));
  }
  remove(id) {
    this.productService.removeProduct(id).subscribe(response => {
      this.sp = this.sp.filter(prd => prd.id != response.id);
    });
  }
}
