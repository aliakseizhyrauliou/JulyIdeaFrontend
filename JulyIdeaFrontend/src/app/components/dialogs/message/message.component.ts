import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from 'src/app/models/IMessage';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message!: IMessage;
  @Input() userId!: number;

  constructor() { }

  ngOnInit(): void {
  }

  

}
