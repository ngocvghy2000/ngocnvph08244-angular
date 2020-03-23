import { Component, OnInit, Input } from "@angular/core";
import { Sanpham } from "../sanpham";
import { Data } from "../data";
import { ProductService } from "../product-service/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: Sanpham;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.activatedRoute.params.subscribe(p => {
      this.product = this.productService.getProduct(param.id);
    });
  }
}
