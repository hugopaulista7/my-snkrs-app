import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SegmentedListComponent } from './segmented-list/segmented-list.component';
import { PressableItemComponent } from './pressable-item/pressable-item.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [
    SegmentedListComponent,
    PressableItemComponent,
    PopoverComponent,
  ],
  exports: [SegmentedListComponent, PressableItemComponent, PopoverComponent],
})
export class ComponentsModule {}
