import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  providers: [ ConfigService ]
})
export class AppComponent {

  constructor(public conf: ConfigService) {
    // setInterval(() => {
    //   conf.skins = conf.skins === 'blue' ? 'black' : 'blue';
    // }, 1000)
  }
}
