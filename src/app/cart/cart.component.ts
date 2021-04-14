import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = this.cartService.getItem();
  purchaseName: string;
  purchaseAddress: string;
  public formGroup = this.fb.group({
    name: ['',Validators.required],
    address: ['',Validators.required]
  });
  constructor(private cartService: CartService, private fb: FormBuilder) {}

  ngOnInit() {
    this.purchaseName = '';
    this.purchaseAddress = '';
  }
  purchase() {
    
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted", this.formGroup.value);
    this.purchaseName = this.formGroup.get('name').value;
     this.purchaseAddress = this.formGroup.get('address').value;
    this.formGroup.reset();
  }
}
