import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductAlertComponent } from "./product-alert/product-alert.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartService } from './cart.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule {}
