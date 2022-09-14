import { Component, Input, OnInit } from '@angular/core';
import { IIdea } from 'src/app/models/Idea';

@Component({
  selector: 'app-group-ideas-template',
  templateUrl: './group-ideas-template.component.html',
  styleUrls: ['./group-ideas-template.component.scss']
})
export class GroupIdeasTemplateComponent implements OnInit {

  @Input() ideas!: IIdea[];
  constructor() { }

  ngOnInit(): void {
  }

}
