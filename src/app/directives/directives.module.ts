import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PressDirective } from "./press/press.directive";

@NgModule({
  declarations: [PressDirective],
  imports: [CommonModule],
  exports: [PressDirective]
})

export class DirectivesModule {}
