import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ACTIONS,
  SneakersService,
} from 'src/app/services/sneakers/sneakers.service';
import { SegmentedListChild } from '../segmented-list/segmented-list.component';

@Component({
  selector: 'popover-content',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  @Input() item: SegmentedListChild | null = null;

  constructor(private snkrsService: SneakersService) {}

  ngOnInit() {
    document.getElementById('item-edit')?.addEventListener('click', (ev) => {
      this.edit();
    });
    document.getElementById('item-delete')?.addEventListener('click', (ev) => {
      this.delete();
    });
  }

  edit() {
    this.snkrsService.sneakerAcitonsSub$.next({
      action: ACTIONS.edit,
      item: this.item,
    });
  }

  delete() {
    this.snkrsService.sneakerAcitonsSub$.next({
      action: ACTIONS.delete,
      item: this.item,
    });
  }
}
