import { Component, OnInit } from '@angular/core';
import { IIdea } from 'src/app/models/Idea';
import { IdeasServiceService } from 'src/app/services/ideas-service.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {

  constructor(private ideasService: IdeasServiceService) { }
  _ideas!: IIdea[];

  ngOnInit(): void {
    this.ideasService.getIdeas()
      .subscribe(ideas => this._ideas = ideas);
  }

}
