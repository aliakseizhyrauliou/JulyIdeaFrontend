import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IdeaCategory } from 'src/app/models/enums/IdeaType';
import { IIdea } from 'src/app/models/Idea';

@Component({
  selector: 'app-single-idea',
  templateUrl: './single-idea.component.html',
  styleUrls: ['./single-idea.component.scss']
})
export class SingleIdeaComponent implements OnInit {

  DEVELOPMENT : string = "development";
  FINANCE : string = "finance";
  ART : string = "art";

  @Input() Idea!: IIdea;
  @Output() Addlike = new EventEmitter<number>();
  @Output() Removelike = new EventEmitter<number>();

  class: string = "";
  constructor(private router: Router) {
   }

  ngOnInit(): void {
    this.checkType();
  }

  checkType(){
    switch(this.Idea.category){
      case 1:
        this.class = this.DEVELOPMENT;
        break;
      case 2:
        this.class = this.FINANCE;
        break;
      case 3:
        this.class = this.ART;
        break;
    }
  }


  addLike(ideaId: number){
    this.Addlike.emit(ideaId);
  }

  removeLike(ideaId: number){
    this.Removelike.emit(ideaId);
  }

  redirect(id: number){
    this.router.navigate(["details/" + id]);
  }

}
