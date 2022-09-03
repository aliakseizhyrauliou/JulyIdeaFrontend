import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-idea-search',
  templateUrl: './idea-search.component.html',
  styleUrls: ['./idea-search.component.scss']
})
export class IdeaSearchComponent implements OnInit {
  
  @Output() ideaSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  search(value: string){
    this.ideaSearch.emit(value);
  }

}
