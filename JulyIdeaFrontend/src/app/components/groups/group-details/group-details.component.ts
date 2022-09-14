import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IIdea } from 'src/app/models/Idea';
import { IGroup } from 'src/app/models/IGroup';
import { GroupsService } from 'src/app/services/groups.service';
import { IdeasServiceService } from 'src/app/services/ideas-service.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {

  @Input() group!: IGroup;
  ideas!: IIdea[];

  constructor(private _activatedroute: ActivatedRoute,
    private _groupService: GroupsService,
    private _ideasService: IdeasServiceService) { }

  ngOnInit(): void {
    this.getIdeaInfo();
  }

  JoinGroup() : void{
    this._groupService.joinGroup(this.group.id)
      .subscribe(x => {
        if(x){
          this.group.isCurrentUserMember = true;
          this.group.membersCount++;
        }
      })
  }

  getGroupsIdeas() : void {
    this._ideasService.getGroupsIdea(this.group.id)
      .subscribe(x => this.ideas = x);
  }


  leaveGroup() : void{
    this._groupService.leaveGroup(this.group.id)
      .subscribe(x => {
        if(x){
          this.group.isCurrentUserMember = false;
          this.group.membersCount--;
        }
      })
  }

  getIdeaInfo() : void {
    const id = Number(this._activatedroute.snapshot.paramMap.get('id'));
    this._groupService.getGroupById(id)
      .subscribe(group => {
        this.group = group;
        this.getGroupsIdeas();
      });
    }
  }



