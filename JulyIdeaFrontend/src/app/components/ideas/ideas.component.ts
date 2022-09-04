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

  constructor(private ideasService: IdeasServiceService,
    private router: Router) { }

  _ideas!: IIdea[];

  ngOnInit(): void {
    this.ideasService.getIdeas()
      .subscribe(ideas => this._ideas = ideas);
      
  }

  search(name: string){
    this.ideasService.findIdeaByName(name)
      .subscribe(ideas => this._ideas = ideas);
    
  }

  redirect(id: number){
    this.router.navigate(["details/" + id]);
  }

}
