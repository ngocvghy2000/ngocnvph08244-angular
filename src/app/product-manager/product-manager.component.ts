import { Component, OnInit } from '@angular/core';
import { Sanpham } from "../sanpham";
import { Data } from "../data";

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sp = Data;
  checkSp : Sanpham;
  removeSp(sp){
    this.sp = this.sp.filter(s => s.id != sp.id);
    this.checkSp = sp;
  }
}