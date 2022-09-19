import { Component, Input, OnInit } from '@angular/core';
import { IIdea } from 'src/app/models/Idea';
import { IdeasServiceService } from 'src/app/services/ideas-service.service';

@Component({
  selector: 'app-ideas-template',
  templateUrl: './ideas-template.component.html',
  styleUrls: ['./ideas-template.component.scss']
})
export class IdeasTemplateComponent implements OnInit {

  @Input() ideas!: IIdea[]
  constructor(private _ideasService: IdeasServiceService) { }

  ngOnInit(): void {

  }

  addLike(ideasId: number){
    this._ideasService.addLike(ideasId)
      .subscribe(x => {
        if(x){
          let index = this.ideas.findIndex(q => q.id === x.id);
          this.ideas[index].isLikedByCurrentUser = true;
        }
      })
  }

  removeLike(ideasId: number){
    this._ideasService.removeLike(ideasId)
      .subscribe(x => {
        if(x){
          let index = this.ideas.findIndex(q => q.id === x.id);
          this.ideas[index].isLikedByCurrentUser = false;
        }
      })
  }

}
