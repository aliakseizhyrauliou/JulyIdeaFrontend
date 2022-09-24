import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { SignalrService } from './services/signalr.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JulyIdeaFrontend';

  constructor(private _signalR : SignalrService){

  }

  ngOnInit() {
    this._signalR.startConnection();
    this._signalR.addTransferChartDataListener();
  }
  

  isAuthentificated() :boolean {
    if(localStorage.getItem("access_token")){
      return true;
    }
    return false;
  }

  getUserName() : string{
    return localStorage.getItem("user_name")!;
  }


}
