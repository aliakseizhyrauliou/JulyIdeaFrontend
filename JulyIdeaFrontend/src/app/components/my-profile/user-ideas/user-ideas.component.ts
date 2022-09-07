import { Component, Input, OnInit } from '@angular/core';
import { IIdea } from 'src/app/models/Idea';
import { IdeasServiceService } from 'src/app/services/ideas-service.service';

@Component({
  selector: 'app-user-ideas',
  templateUrl: './user-ideas.component.html',
  styleUrls: ['./user-ideas.component.scss']
})
export class UserIdeasComponent implements OnInit {


  @Input() userId!: number;
  ideas! :IIdea[]
  constructor(private ideaService: IdeasServiceService) { }

  ngOnInit(): void {
    this.getUserIdeas();
  }

  getUserIdeas(){
    this.ideaService.getUserIdeas(this.userId)
      .subscribe(ideas => this.ideas = ideas);
  }

}
