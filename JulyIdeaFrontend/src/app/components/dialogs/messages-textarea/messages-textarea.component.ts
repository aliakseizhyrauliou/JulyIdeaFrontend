import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, NgZone, ViewChild, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {take} from 'rxjs/operators';
import { IMessage } from 'src/app/models/IMessage';

@Component({
  selector: 'app-messages-textarea',
  templateUrl: './messages-textarea.component.html',
  styleUrls: ['./messages-textarea.component.scss']
})
export class MessagesTextareaComponent implements OnInit {

  message!: IMessage;
  @Output() onSendMessage = new EventEmitter<IMessage>(); 
 
  constructor() {
    this.message = {} as IMessage;
  }

  ngOnInit(): void {

  }


  sendMessage() {
    this.onSendMessage.emit(this.message);
    this.message = {} as IMessage;
    }


}
