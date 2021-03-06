import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SlideComponent } from "./slide/slide.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductService } from "./product-service/product.service";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SlideComponent,
    ProductListComponent,
    ProductManagerComponent,
    ProductDetailComponent,
    AddProductComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    ProductEditComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {}
