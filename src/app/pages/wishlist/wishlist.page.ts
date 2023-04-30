import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SegmentedList } from 'src/app/components/segmented-list/segmented-list.component';
import { SneakersService } from 'src/app/services/sneakers/sneakers.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  get list(): SegmentedList {
    return this.snkrsService.groupedByBrand;
  }

  constructor(private router: Router, private snkrsService: SneakersService) {}

  ngOnInit() {}
}
