import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping-cart-mini",
  templateUrl: "./shopping-cart-mini.component.html",
  styleUrls: ["./shopping-cart-mini.component.css"]
})
export class ShoppingCartMiniComponent implements OnInit {
  totalItems: number = 0;
  totalPrice: number = 0;
  constructor() {}

  ngOnInit() {}
}
