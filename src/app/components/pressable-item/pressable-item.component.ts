import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { SegmentedListChild } from '../segmented-list/segmented-list.component';

@Component({
  selector: 'pressable-item',
  templateUrl: './pressable-item.component.html',
  styleUrls: ['./pressable-item.component.scss'],
})
export class PressableItemComponent implements OnInit {
  pressableItem!: ElementRef;

  @Input() item: SegmentedListChild | null = null;
  isOpen = false;
  private _id: string = '';

  constructor() {}

  get id(): string {
    if (!this._id.length) {
      this._id = this.makeId();
    }

    return this._id;
  }

  ngOnInit() {}

  private makeId() {
    const text = this.item?.text.replaceAll(' ', '');
    const strTrigger = 'context-menu-trigger-';
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 8) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return strTrigger + text + result;
  }
}
