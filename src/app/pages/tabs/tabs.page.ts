import { Component, OnInit } from '@angular/core';

interface TabItem {
  path: string;
  icon: string;
  title: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  tabs: Array<TabItem> = [
    {
      path: 'home',
      icon: 'home-outline',
      title: 'Feed',
    },
    {
      path: 'wishlist',
      icon: 'cart-outline',
      title: 'Wishlist',
    },
    {
      path: 'settings',
      icon: 'cog-outline',
      title: 'Settings',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
