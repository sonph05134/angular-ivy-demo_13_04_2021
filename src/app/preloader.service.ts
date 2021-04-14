import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PreloaderService {
  private _selector = "globalLoader";
  constructor() {}

  private _getElement() {
    return document.getElementById(this._selector);
  }
  public _setElement(element: any) {
    this._selector = element;
  }
  hide() {
    const el = this._getElement();
    if (el) {
      el.addEventListener("transitionend", () => {
         el.className = "global-loader-hiden";
      });
      if (!el.className.includes("global-loader-hiden")) {
        el.className = "global-loader-fade-in";
      }
    }
    if(el.className.includes("global-loader-hiden")){
       document.getElementById('globalLoader').style.display = 'none';
       console.log('global-loader-hiden',el);
    }else if(el.className.includes("global-loader-fade-in")) {document.getElementById('globalLoader').style.display = '';
    console.log('global-loader-fade-i',el);}
  }
}
