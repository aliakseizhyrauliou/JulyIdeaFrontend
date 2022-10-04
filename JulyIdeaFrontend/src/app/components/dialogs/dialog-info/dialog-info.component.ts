import { Component, OnInit } from '@angular/core';
import { IMessage } from 'src/app/models/IMessage';
import { MessagesService } from 'src/app/services/messages.service';
import { SignalrService } from 'src/app/services/signalr.service';
import { HubConnection } from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.scss']
})
export class DialogInfoComponent implements OnInit {

  message: IMessage;
  messages: IMessage[] = [];
  accessToken : string;
  private _hubConnection: HubConnection | undefined;

  constructor(private signalR: SignalrService, 
    private messageService: MessagesService) { 
    this.message = {} as IMessage;
    this.accessToken = localStorage.getItem("access_token")!;
  }

  ngOnInit() {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7144/messages', { accessTokenFactory: () => this.accessToken })
      .configureLogging(signalR.LogLevel.Trace)
      .build();

    this._hubConnection.start().catch((err) => console.error(err.toString()));

    this._hubConnection.on('ReceiveMessage', (data: IMessage) => {;
      this.messages.push(data);
    });
  }

  sendMessage(){
    this.message.receiverId = 6;
    this.message.text = "Hello world";
    this.messageService.sendMessage(this.message)
      .subscribe(x => console.log("Ok"));
  }

  checkServer(){
    this.messageService.checkServer()
      .subscribe(x => console.log(x));
  }

  

}
