import { Component, OnInit } from '@angular/core';
import { SegmentedList } from 'src/app/components/segmented-list/segmented-list.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  list: SegmentedList = [
    {
      title: 'My Wishlist',
      children: [
        { text: 'Testing' },
        { text: 'Testing' },
        { text: 'Testing' },
        { text: 'Testing' },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
