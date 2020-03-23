import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SlideComponent } from "./slide/slide.component";
import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CategoryComponent } from "./category/category.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductService } from "./product-service/product.service";
import { AboutComponent } from './about/about.component';
@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SlideComponent,
    ProductComponent,
    ProductListComponent,
    CategoryComponent,
    ProductManagerComponent,
    ProductDetailComponent,
    AddProductComponent,
    AboutComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {}
