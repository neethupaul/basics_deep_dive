import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId = 10; 
  serverStatus = Math.random() < 0.5 ? "Online" : "Offline";
  allowNewServer = false;
  serverCreationStatus = "No server Created";
  serverName = 'TestSerer';
  userName = 'TestUser';
  allowUserName = '';

  constructor() { 
    setTimeout (  () => {this.allowNewServer = true; } , 2); 
  }

  ngOnInit() {
  }

  OnClickServer()  {
  this.serverCreationStatus = "New server Created!!";
}

OnInputServer(event: Event){
  this.serverName = (<HTMLInputElement>event.target).value;
  
  }
    OnClickUser(){
this.userName = '';

    }
    getColour(){
return this.serverStatus === 'Online' ?  'Green' : 'Red';

    }
}