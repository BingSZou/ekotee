import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatalogListComponent } from "./catalog-list/catalog-list.component";
import { ProductDetailsComponent } from "./catalog/product-details/product-details.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { TeesComponent } from "./tees/tees.component";
import { SweatshirtsComponent } from "./sweatshirts/sweatshirts.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "catalog-list", component: CatalogListComponent },
  { path: "products", component: CatalogListComponent },
  { path: "category/tees", component: TeesComponent },
  { path: "category/sweatshirts", component: SweatshirtsComponent },
  { path: "category/about", component: AboutComponent },
  { path: "products/:id", component: ProductDetailsComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },
  { path: "about", component: AboutComponent },
  { path: "", component: CatalogListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
