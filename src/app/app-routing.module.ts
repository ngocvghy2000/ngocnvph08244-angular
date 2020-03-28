import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "add-product", component: AddProductComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "product/detail", component: ProductDetailComponent },
  { path: "product/detail/:id", component: ProductDetailComponent },
  { path: "product/edit/:id", component: ProductEditComponent },
  { path: "product/manager", component: ProductManagerComponent },
  { path: "product/list", component: ProductListComponent },
  { path: "**", redirectTo: "404", pathMatch: "full" },
  { path: "404", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
