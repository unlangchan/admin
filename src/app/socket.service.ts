import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Injectable()
export class SocketService {

  public io: SocketIOClient.Socket;
  constructor() {
    let socket = this.io = io(`${window.location.hostname}:8080`);
    socket.on('connect', () => {
      console.log(socket.id);
    });
  }

  auth() {
    this.io.emit('auth', {
      token: Cookie.get('admin_token')
    })
  }

}
