import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HeaderData } from "./header-data.model";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    // O SUBJECT (HeaderData) FUNCIONA COMO O PORTEIRO, QUE CONSEGUE DETECTAR O EVENTO E NOTIFICAR OS INTERESSADOS (OBSERVADORES)
    title: "Início",
    icon: "home",
    routeUrl: "",
  });

  constructor() {}

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
