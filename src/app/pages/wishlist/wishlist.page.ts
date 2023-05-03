import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SegmentedList } from 'src/app/components/segmented-list/segmented-list.component';
import { Sneaker } from 'src/app/models/sneaker';
import {
  ACTIONS,
  SneakersService,
} from 'src/app/services/sneakers/sneakers.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  get list(): SegmentedList {
    return this.snkrsService.groupedByBrand;
  }

  constructor(
    private router: Router,
    private snkrsService: SneakersService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.handleSnkrsActions();
  }

  private handleSnkrsActions() {
    this.snkrsService.sneakerAcitonsSub$.subscribe((subjRes) => {
      if (subjRes.action == ACTIONS.edit) {
        this.edit(subjRes.item.sneaker);
      } else if (subjRes.action == ACTIONS.delete) {
        this.delete(subjRes.item.sneaker);
      }
    });
  }

  private edit(sneaker: Sneaker) {}

  private async delete(sneaker: Sneaker) {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'This action cannot be reverted',
      buttons: [
        { text: 'Ok', cssClass: 'alert-ok-button' },
        { text: 'Cancel', cssClass: 'alert-delete-button', role: 'cancel' },
      ],
    });

    alert.present();
  }
}
