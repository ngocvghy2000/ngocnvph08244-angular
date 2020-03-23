import { Component, OnInit,Input } from '@angular/core';
import { Sanpham } from "../sanpham";
import { Data } from "../data";



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }
@Input() objsp : Sanpham;
  ngOnInit() {
    tgetProduct();
  }
  getProduct(){

  }
}