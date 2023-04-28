import { Component, Input, OnInit } from '@angular/core';

interface SegmentedListChild {
  text: string;
}

interface SegmentedListItem {
  title: string;
  children: Array<SegmentedListChild>;
}

type SegmentedList = Array<SegmentedListItem>;

@Component({
  selector: 'segmented-list',
  templateUrl: './segmented-list.component.html',
  styleUrls: ['./segmented-list.component.scss'],
})
export class SegmentedListComponent implements OnInit {
  @Input() itens: SegmentedList = [];

  constructor() {}

  ngOnInit() {}
}
