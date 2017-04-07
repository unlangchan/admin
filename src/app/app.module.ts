import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DirectivesModule } from './directives/directives.module';

import { SocketService } from './socket.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    DirectivesModule
  ],
  providers: [ SocketService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
