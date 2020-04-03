import { Component, OnInit } from "@angular/core";
import { of, Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  private menu$: Observable<string[]>;
  constructor() {}

  ngOnInit() {
    this.menu$ = of(["Tees", "Sweatshirts", "About"]);
  }
}
