import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverStatus = 'This servers are at capacity';
  allowNewServer = true;
  serverName = 'Project Cloud';
  serverUpdated = false;
  serverCapacity = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 9000);

    this.serverCapacity = Math.random() > 0.5 ? 'High' : 'Low';
  }

  onButtonClickHandler() {
    this.serverStatus = 'Server ' + this.serverName + ' was created!';
  }

  onUpdateServer() {
    this.serverUpdated = true;
  }

  onType(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.serverCapacity === 'High' ? 'red' : 'green';
  }
}
