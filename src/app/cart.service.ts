import { Injectable } from "@angular/core";
import { AnonymousSubject } from "rxjs/internal/Rx";

@Injectable({ providedIn: "root" })
export class CartService {
  items = [];
  constructor() {}

  addCart(product: any) {
    this.items.push(product);
  }
  getItem(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
}
