import { Component, OnInit } from "@angular/core";
import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products = products ;
  str: string;
  cbr: {id:null,name:null,price:null,description:null};



  constructor() {
    this.cbr = null;
    this.str = 'hello';
  }

ngOnInit():void{
  
}
  share(res:any) {
    this.cbr =  res;

    // window.alert("The product has been shared!");
  }

   onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
