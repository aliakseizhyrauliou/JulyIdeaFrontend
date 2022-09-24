import { Component, OnInit } from '@angular/core';
import { IDialog } from 'src/app/models/IDialog';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

  dialogs!: IDialog[];
  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.getDialogs();
  }

  getDialogs(){
    this.messagesService.getUserDialogs()
      .subscribe(x => this.dialogs = x);
  }

}
