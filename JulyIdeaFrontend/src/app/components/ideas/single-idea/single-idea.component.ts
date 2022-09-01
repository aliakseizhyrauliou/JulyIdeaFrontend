import { Component, Input, OnInit } from '@angular/core';
import { IIdea } from 'src/app/models/Idea';

@Component({
  selector: 'app-single-idea',
  templateUrl: './single-idea.component.html',
  styleUrls: ['./single-idea.component.scss']
})
export class SingleIdeaComponent implements OnInit {

  @Input() Idea!: IIdea;
  constructor() { }

  ngOnInit(): void {
    console.log(this.Idea.stack)
  }

}
