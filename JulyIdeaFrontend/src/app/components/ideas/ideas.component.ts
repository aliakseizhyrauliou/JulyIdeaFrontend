import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IIdea } from 'src/app/models/Idea';
import { IdeasServiceService } from 'src/app/services/ideas-service.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {

  portionNumber: number = 1;

  constructor(private ideasService: IdeasServiceService,
    private router: Router) { }

  _ideas!: IIdea[];

  ngOnInit(): void {
    this.ideasService.getPortionOfIdeas(this.portionNumber)
      .subscribe(x => {
        this._ideas = x;
        this.portionNumber++;
      });
      
  }

  search(name: string){
    this.ideasService.findIdeaByName(name)
      .subscribe(ideas => this._ideas = ideas);
    
  }

  onScroll(){
    this.ideasService.getPortionOfIdeas(this.portionNumber)
      .subscribe(x => {
        this._ideas = this._ideas.concat(x);
        this.portionNumber++;
      });
      console.log("Loaded");
  }

  addLike(ideaId : number){
    this.ideasService.addLike(ideaId)
      .subscribe(x => {
        if(x){
          let index = this._ideas.findIndex(q => q.id === x.id);
          this._ideas[index].isLikedByCurrentUser = true;
        }
      })
  }

  removeLike(ideaId: number){
    this.ideasService.removeLike(ideaId)
      .subscribe(x => {
        if(x){
          let index = this._ideas.findIndex(q => q.id === x.id);
          this._ideas[index].isLikedByCurrentUser = false;
        }
      })
  }

}
