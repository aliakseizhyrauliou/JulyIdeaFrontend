import { Component, OnInit } from '@angular/core';
import { IGroup } from 'src/app/models/IGroup';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  groups! : IGroup[];
  constructor(private _groupService: GroupsService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(){
    this._groupService.getGroups()
      .subscribe(x => this.groups = x);
  }

}
