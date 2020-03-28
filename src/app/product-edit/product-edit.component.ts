import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product-service/product.service";
import { Sanpham } from "../sanpham";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"]
})
export class ProductEditComponent implements OnInit {
  product: Sanpham;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router : Router
  ) {}

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.activatedRoute.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(
        data => (this.product = data));
    });
  }
  update(){
    this.productService.updateProduct(this.product).subscribe(data => this.router.navigateByUrl("/product/manager"))
  }
}
