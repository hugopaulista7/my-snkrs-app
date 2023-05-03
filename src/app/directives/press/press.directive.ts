import {
  Directive,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

const TOUCHSTART = 'touchstart';
const TOUCHEND = 'touchend';

@Directive({
  selector: '[longPress]',
})
export class PressDirective implements OnInit {
  @Output() press = new EventEmitter();
  pressGesture = {
    name: 'longPress',
    enabled: false,
    interval: 251,
  };

  pressTimeout: NodeJS.Timeout | undefined = undefined;
  isPressing: Boolean = false;
  lastTap = 0;
  tapCount = 0;
  tapTimeout = null;

  constructor() {}

  ngOnInit(): void {
    this.pressGesture.enabled = true;
  }

  @HostListener(TOUCHSTART, ['$event'])
  @HostListener(TOUCHEND, ['$event'])
  onPress(event: any) {
    if (!this.pressGesture.enabled) {
      return;
    }

    this.handlePressing(event.type);
  }

  handlePressing(type: any) {
    if (type == TOUCHSTART) {
      this.pressTimeout = setTimeout(() => {
        this.isPressing = true;
        this.press.emit('start');
      }, this.pressGesture.interval);
    } else if (type == TOUCHEND) {
      clearTimeout(this.pressTimeout);
      if (this.isPressing) {
        this.press.emit('end');
        this.resetTaps();
      }

      setTimeout(() => {
        this.isPressing = false;
      }, 50);
    }
  }

  private resetTaps() {
    clearTimeout(this.pressTimeout);
    this.tapCount = 0;
    this.tapTimeout = null;
    this.lastTap = 0;
  }
}
