import { Injectable } from '@angular/core';
import { Sneaker } from 'src/app/models/sneaker';
import { StorageService } from '../storage/storage.service';
import { SegmentedList } from 'src/app/components/segmented-list/segmented-list.component';

const SNEAKERS_ARRAY_KEY = 'snkrs_saved_list';

export const groupBy = (elements: any, key: string): Array<any> => {
  return elements.reduce((rv: any, x: any) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

@Injectable({
  providedIn: 'root',
})
export class SneakersService {
  private _sneakersSession: Array<Sneaker> = [];

  constructor(private storage: StorageService) {}

  get sneakersSession(): Array<Sneaker> {
    const storageSnkrs = this.storage.get(SNEAKERS_ARRAY_KEY);

    if (!storageSnkrs) {
      return [];
    }
    this._sneakersSession = storageSnkrs;
    return this._sneakersSession;
  }

  get groupedByBrand(): SegmentedList {
    const snkrs = this.sneakersSession;
    if (!snkrs.length) {
      return [];
    }
    const grouped: any = groupBy(snkrs, 'brand');

    return Object.keys(grouped)
      .sort((a: string, b: string) => a.localeCompare(b))
      .map((key: string) => {
        return {
          title: key,
          children: grouped[key].map((e: Sneaker) => {
            return { text: e.modelName };
          }),
        };
      });
  }

  save(snkr: Sneaker) {
    this._sneakersSession.push(snkr);

    this.storage.save(SNEAKERS_ARRAY_KEY, this._sneakersSession);
  }
}
