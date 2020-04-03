import { Component, OnInit } from "@angular/core";
import { ProductServiceService } from "src/app/product-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { ThrowStmt } from "@angular/compiler";
import { Product } from "src/app/models";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  private id: number;
  private product: Product;
  private product$: Observable<Product>;
  private selectedImage$: Observable<string>;
  private images: string[];
  private alertMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductServiceService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => params.get("id")),
        tap(id => (this.id = +id))
      )
      .subscribe(id => {
        this.product = this.productService.getProduct(this.id);
        this.product$ = of(this.product);
        this.images = this.product.images;
        this.selectedImage$ = of(this.product.images[0]);
      });
  }
  onImageClick(idx: number) {
    this.selectedImage$ = of(this.images[idx]);
  }
  onAddToCart() {
    this.alertMessage = this.product.title + " is added to the cart";
  }
}
