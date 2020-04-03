import { Component, OnInit } from "@angular/core";
import { ProductServiceService } from "../product-service.service";

@Component({
  selector: "app-catalog-list",
  templateUrl: "./catalog-list.component.html",
  styleUrls: ["./catalog-list.component.css"]
})
export class CatalogListComponent implements OnInit {
  availableProducts: Product[];
  constructor(private productService: ProductServiceService) {}

  ngOnInit() {
    this.availableProducts = this.productService.loadProducts();
    console.log(this.availableProducts);
  }
}
