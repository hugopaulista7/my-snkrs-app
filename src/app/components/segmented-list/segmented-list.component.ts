import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Gesture, GestureController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { Sneaker } from 'src/app/models/sneaker';

export interface SegmentedListChild {
  text: string;
  sneaker: Sneaker;
}

interface SegmentedListItem {
  title: string;
  children: Array<SegmentedListChild>;
}

export type SegmentedList = Array<SegmentedListItem>;

@Component({
  selector: 'segmented-list',
  templateUrl: './segmented-list.component.html',
  styleUrls: ['./segmented-list.component.scss'],
})
export class SegmentedListComponent implements OnInit {
  @Input() itens: SegmentedList = [];
  @ViewChild('popover') popover: any;
  isOpen = false;

  constructor(private popoverCtrl: PopoverController) {}

  ngOnInit() {}

  async handleItemPress(event: any, item: any) {
    console.log('Event:: ', event);
    this.popover.event = event;
    this.isOpen = true;
    console.log('popover:: ', this.popover);
    // const popover = await this.popover.create({
    //   component: PopoverComponent,
    //   event: event,
    //   componentProps: {

    //   }
    // });

    // popover.present();
  }
}
