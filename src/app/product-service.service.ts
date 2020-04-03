import { Injectable } from "@angular/core";
import { Product } from "./models";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductServiceService {
  private products: Product[];
  constructor() {}

  loadProducts(): Product[] {
    //if (!this.products) {
    console.log("creating product!!!");
    this.products = [
      {
        name: "cropped_mock_neck_tee",
        productId: 1,
        images: [
          "assets/cropped_mock_neck_tee/cropped_mock_neck_tee_1.jpeg",
          "assets/cropped_mock_neck_tee/cropped_mock_neck_tee_2.jpeg",
          "assets/cropped_mock_neck_tee/cropped_mock_neck_tee_3.jpeg"
        ],
        title: "Cropped black EKO mock neck",
        description:
          "cropped ‘90s mock neck tee made with a soft, fleece-like fabric.",
        category: 1,
        subCategory: 1,
        price: 12.0,
        salePrice: 0,
        sizes: ["M"]
      },
      {
        name: "floral_white_blouse",
        productId: 2,
        title: "Floral white blouse",
        images: ["assets/cropped_mock_neck_tee/cropped_mock_neck_tee_2.jpeg"],
        description:
          "A very cute white blouse, with little floral accent.  This definitely would acent your feminate figure.",
        category: 2, // vintage finds
        subCategory: 2,
        price: 20.0,
        salePrice: 18,
        sizes: ["M"]
      }
    ];
    // }
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products[id - 1];
  }
  getCategories(): Observable<string[]> {
    console.log("Get category...");
    return of(["Tees", "Sweatshirts"]);
  }
}
