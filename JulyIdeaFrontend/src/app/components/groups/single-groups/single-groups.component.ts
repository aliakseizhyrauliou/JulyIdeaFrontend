import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IGroup } from 'src/app/models/IGroup';

@Component({
  selector: 'app-single-groups',
  templateUrl: './single-groups.component.html',
  styleUrls: ['./single-groups.component.scss']
})
export class SingleGroupsComponent implements OnInit {

  @Input() group!: IGroup;
  @Output() joinGroup = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  JoinGroup(){
    this.joinGroup.emit(this.group.id);
  } 

}
