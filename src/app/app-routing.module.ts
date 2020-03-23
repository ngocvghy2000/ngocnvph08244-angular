import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {ProductListComponent}  from "../product-list/product-list.component";
import {AddProductComponent}  from "./add-product/add-product.component";
import {AboutComponent}  from "./about/about.component";

const routes: Routes = [
  // { path: 'home', component: HomeComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }