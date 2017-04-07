import { Component } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

  constructor(private conf: ConfigService) {

  }
}
