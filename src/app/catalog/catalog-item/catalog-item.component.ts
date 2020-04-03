import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models";

@Component({
  selector: "app-catalog-item",
  templateUrl: "./catalog-item.component.html",
  styleUrls: ["./catalog-item.component.css"]
})
export class CatalogItemComponent implements OnInit {
  @Input()
  product: Product;

  constructor() {}

  ngOnInit() {
    console.log(this.product);
  }
}
