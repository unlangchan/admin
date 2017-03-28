import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[app-skin]'
})
export class SkinDirective {

  static skinMap: Object = {
    blue: 'skin-blue',
    black: 'skin-black'
  };

  @Input('skin-option')
  option: string;

  elem: HTMLElement;

  constructor(el: ElementRef) {
    this.elem = el.nativeElement;
  }

  ngOnChanges() {
    let oldSkin = [], skin = SkinDirective.skinMap[ this.option ];
    console.log(this.option)
    if (typeof skin === 'undefined') return;
    let classList: DOMTokenList = this.elem.classList,
      len = classList.length;
    for (let i = 0; i < len; i++) {
      let item: string = classList.item(i);
      if (item.indexOf('skin') === 0) oldSkin.push(item);
    }
    classList.remove(...oldSkin);
    classList.add(skin);
  }
}
