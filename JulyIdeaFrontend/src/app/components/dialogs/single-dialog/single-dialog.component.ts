import { Component, Input, OnInit } from '@angular/core';
import { IDialog } from 'src/app/models/IDialog';

@Component({
  selector: 'app-single-dialog',
  templateUrl: './single-dialog.component.html',
  styleUrls: ['./single-dialog.component.scss']
})
export class SingleDialogComponent implements OnInit {


  @Input() dialog!: IDialog;
  constructor() { }

  ngOnInit(): void {
  }

}
