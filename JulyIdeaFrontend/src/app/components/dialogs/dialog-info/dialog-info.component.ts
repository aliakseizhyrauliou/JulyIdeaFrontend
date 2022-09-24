import { Component, OnInit } from '@angular/core';
import { SignalrService } from 'src/app/services/signalr.service';

@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.scss']
})
export class DialogInfoComponent implements OnInit {

  constructor(private signalR: SignalrService) { }

  ngOnInit(): void {
    this.signalR.startConnection();
    this.signalR.addTransferChartDataListener();
  }

}
