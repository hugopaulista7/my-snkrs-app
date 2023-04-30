import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  save(key: string, elements: any) {
    const elJson = JSON.stringify(elements);

    localStorage.setItem(key, elJson);
  }

  get(key: string): any {
    const objJson = localStorage.getItem(key);

    if (!objJson) {
      return null;
    }

    return JSON.parse(objJson);
  }
}
