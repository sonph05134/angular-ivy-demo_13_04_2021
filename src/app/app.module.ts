import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    RouterModule.forRoot([
      { path: '', 
      component: ProductListComponent }]), 
    FormsModule
    ],
  declarations: [
    AppComponent, 
    HelloComponent,
    TopBarComponent,
    ProductListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
