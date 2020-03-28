import { Component, OnInit, Input } from "@angular/core";
import { Sanpham } from "../sanpham";
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
    private router: ActivatedRoute
  ) {}
  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.router.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(data => {
        this.product = data;
      });
    });
  }
}
