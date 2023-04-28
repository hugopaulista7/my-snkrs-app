import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SegmentedListComponent } from './segmented-list/segmented-list.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [SegmentedListComponent],
  exports: [SegmentedListComponent],
})
export class ComponentsModule {}
