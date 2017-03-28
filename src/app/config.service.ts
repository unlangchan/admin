import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  layout: string = "default";//default,fixed,boxed
  sidebarOpenOrCollapse: string = "open";//open,collapse
  sidebarExpandOrHover: string = "expand";//expand,hover
  rightSidebarSlideType: string = "over";//over(over content),push(push content)
  rightSidebarSkinDarkOrLight: string = "dark";//dark,light
  skins: string = "blue";//blue,black
  constructor() {

  }

}
