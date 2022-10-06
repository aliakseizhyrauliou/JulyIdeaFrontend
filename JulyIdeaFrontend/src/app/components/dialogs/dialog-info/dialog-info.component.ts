import { Component, OnInit } from '@angular/core';
import { IMessage } from 'src/app/models/IMessage';
import { MessagesService } from 'src/app/services/messages.service';
import { SignalrService } from 'src/app/services/signalr.service';
import { HubConnection } from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';
import { ActivatedRoute } from '@angular/router';

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
  companionId!: number;
  currentUserId!: number;

  constructor(private signalR: SignalrService, 
    private messageService: MessagesService, private _activatedroute : ActivatedRoute) { 
    this.message = {} as IMessage;
    this.accessToken = localStorage.getItem("access_token")!;
    this.companionId = Number(this._activatedroute.snapshot.paramMap.get('id'));
    this.currentUserId = Number(localStorage.getItem("user_id"));
  }

  ngOnInit() {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7144/messages', { accessTokenFactory: () => this.accessToken })
      .configureLogging(signalR.LogLevel.Trace)
      .build();

    this._hubConnection.start().catch((err) => console.error(err.toString()));

    this._hubConnection.on('ReceiveMessage', (data: IMessage) => {;
      this.messages.push(data);
      let wrapper : HTMLElement= document.querySelector('.wrapper') as HTMLElement;
      wrapper.scrollTop = wrapper.scrollHeight + 100;
    });

    this.getMessages();
  }

  sendMessage(message: IMessage){
    if(message){
      message.receiverId = this.companionId;
      this.messageService.sendMessage(message)
        .subscribe(x => {
          this.messages.push(x);
          let wrapper : HTMLElement= document.querySelector('.wrapper') as HTMLElement;
          wrapper.scrollTop = wrapper.scrollHeight + 100;
        });
    }
  }

  checkServer(){
    this.messageService.checkServer()
      .subscribe(x => console.log(x));
  }

  getMessages(){
    this.messageService.getMessagesOfTwoUser(this.companionId)
      .subscribe(x => this.messages = x);
  }

  

  

}
