import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDialog } from 'src/app/models/IDialog';

@Component({
  selector: 'app-single-dialog',
  templateUrl: './single-dialog.component.html',
  styleUrls: ['./single-dialog.component.scss']
})
export class SingleDialogComponent implements OnInit {


  @Input() dialog!: IDialog;
  constructor(private router: Router) { }

  
  ngOnInit(): void {
  }

  redirect(){
    this.router.navigate([`/dialog/${this.dialog.userId}`]);
  }

}
