import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverStatus = 'This servers are at capacity';
  allowNewServer = true;
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 9000);
  }

  onButtonClickHandler() {
    this.serverStatus = 'Server ' + this.serverName + ' was created!';
  }

  onType(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
