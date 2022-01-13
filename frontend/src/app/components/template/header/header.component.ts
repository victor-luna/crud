import { Component, OnInit } from "@angular/core";
import { HeaderService } from "./header.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private headerServices: HeaderService) {
    // INJETANDO DEPENDÊNCIAS
  }

  ngOnInit(): void {}

  get title(): string {
    return this.headerServices.headerData.title;
  }

  get icon(): string {
    return this.headerServices.headerData.icon;
  }

  get routeUrl(): string {
    return this.headerServices.headerData.routeUrl;
  }
}
