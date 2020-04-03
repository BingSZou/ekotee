import { Component, OnInit } from "@angular/core";
import { ProductServiceService } from "src/app/product-service.service";

@Component({
  selector: "app-catalog-item-page",
  templateUrl: "./catalog-item-page.component.html",
  styleUrls: ["./catalog-item-page.component.css"]
})
export class CatalogItemPageComponent implements OnInit {
  availableProducts: Product[];
  constructor(private productService: ProductServiceService) {}

  ngOnInit() {
    this.availableProducts = this.productService.loadProducts();
  }
}
