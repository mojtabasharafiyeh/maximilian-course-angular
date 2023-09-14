import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverName = 'test';
  serverStatus: string = 'not created';
  servers = ['test', 'test2'];
  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  oninput(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onclick() {
    this.servers.push(this.serverName);
    this.serverStatus = 'created and its name is:' + this.serverName;
  }
  getcolor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
