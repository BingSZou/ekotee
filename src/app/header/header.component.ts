import { Component, OnInit } from "@angular/core";
import { MenuService } from "../menu.service";
import { IMenuItem } from "../models";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  menu$: Observable<IMenuItem[]>;
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menu$ = this.menuService.getMenus();
  }
}
