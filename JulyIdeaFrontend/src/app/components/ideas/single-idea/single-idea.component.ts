import { Component, Input, OnInit } from '@angular/core';
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

  class: string = "";
  constructor() {
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

}
