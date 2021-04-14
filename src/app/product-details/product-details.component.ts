import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { CartService } from "../cart.service";
import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route:ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const   routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number( routeParams.get('productId'));

    this.product = products.find(res => res.id === productIdFromRoute);
  }
  addToCart(product){
    this.cartService.addCart(product);
    console.log('Your product has been added to the cart!');
    console.log('show product in cart',this.cartService.getItem());
  }
}
