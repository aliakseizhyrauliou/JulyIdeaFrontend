import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IIdea } from 'src/app/models/Idea';
import { IdeasServiceService } from 'src/app/services/ideas-service.service';

@Component({
  selector: 'app-idea-info',
  templateUrl: './idea-info.component.html',
  styleUrls: ['./idea-info.component.scss'],
})

export class IdeaInfoComponent implements OnInit {

  constructor(private _activatedroute : ActivatedRoute,
    private ideasService: IdeasServiceService) { }

  idea! : IIdea;

  ngOnInit(): void {
    this.getIdea();
  }

  getIdea() : void {
    const id = Number(this._activatedroute.snapshot.paramMap.get('id'));
    this.ideasService.getIdeaById(id)
      .subscribe(idea => this.idea = idea);
  }

}
