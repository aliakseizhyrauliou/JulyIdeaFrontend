import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  @Input() user!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
