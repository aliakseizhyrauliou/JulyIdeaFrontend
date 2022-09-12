import { Component, Input, OnInit } from '@angular/core';
import { IGroup } from 'src/app/models/IGroup';

@Component({
  selector: 'app-single-groups',
  templateUrl: './single-groups.component.html',
  styleUrls: ['./single-groups.component.scss']
})
export class SingleGroupsComponent implements OnInit {

  @Input() group!: IGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
