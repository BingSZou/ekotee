import { BrowserModule } from "@angular/platform-browser";
import { APP_INITIALIZER, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CatalogListComponent } from "./catalog-list/catalog-list.component";
import { CatalogItemComponent } from "./catalog/catalog-item/catalog-item.component";
import { CatalogItemPageComponent } from "./catalog/catalog-item-page/catalog-item-page.component";
import { ProductDetailsComponent } from "./catalog/product-details/product-details.component";
import { ProductServiceService } from "./product-service.service";
import { ShoppingCartMiniComponent } from "./shopping-cart-mini/shopping-cart-mini.component";
import { TeesComponent } from './tees/tees.component';
import { SweatshirtsComponent } from './sweatshirts/sweatshirts.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ShoppingCartComponent,
    CatalogListComponent,
    CatalogItemComponent,
    CatalogItemPageComponent,
    ProductDetailsComponent,
    ShoppingCartMiniComponent,
    TeesComponent,
    SweatshirtsComponent,
    AboutComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // ProductServiceService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (ps: ProductServiceService) => () => ps.loadProducts(),
    //   deps: [ProductDetailsComponent],
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
