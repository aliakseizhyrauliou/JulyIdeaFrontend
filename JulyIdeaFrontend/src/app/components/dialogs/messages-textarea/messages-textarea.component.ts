import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, NgZone, ViewChild, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-messages-textarea',
  templateUrl: './messages-textarea.component.html',
  styleUrls: ['./messages-textarea.component.scss']
})
export class MessagesTextareaComponent implements OnInit {
 
  constructor(private _ngZone: NgZone) { }

  ngOnInit(): void {
  }


}
