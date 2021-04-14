import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CartService {
  items = [];
  constructor(private http: HttpClient) {}

  addCart(product: any) {
    this.items.push(product);
  }
  getItem() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<{ type: string; price: string } []>(
      "/assets/shipping.json"
    );
  }
}
