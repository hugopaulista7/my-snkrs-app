import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  tabRoot = false;

  constructor() {}

  setRootTabs() {
    this.tabRoot = true;
  }
}
