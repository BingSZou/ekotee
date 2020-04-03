import { Injectable } from "@angular/core";

import { of, Observable } from "rxjs";
import { take, switchMap, tap } from "rxjs/operators";
import { IMenuItem } from "./models";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  private menu$: Observable<IMenuItem[]>;
  constructor() {
    console.log("initilizing header menu");

    this.menu$ = of([
      { label: "Tees", url: "/category/tees" },
      { label: "Sweatshirts", url: "/category/sweatshirts" },
      { label: "About", url: "/about" }
    ]);

    // this.productService.getCategories().pipe(tap(console.log));

    // this.productService.getCategories().pipe(
    //   //tap(_ => console.log("getting category")),
    //   tap(console.log),
    //   switchMap(categoryArray =>
    //     categoryArray.map(categoryItem => {
    //       // return {categoryItem, `/category/{categoryItem.toLowerCase()}` };
    //       return "test";
    //     })
    //   ),
    //   tap(() => {
    //     this.menu$ = of(["shirt"]);
    //   })
    // );
  }

  getMenus(): Observable<IMenuItem[]> {
    return this.menu$;
  }
}
