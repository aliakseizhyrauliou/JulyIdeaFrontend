import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IChainElement } from 'src/app/models/IChainElement';

@Component({
  selector: 'app-chain-element',
  templateUrl: './chain-element.component.html',
  styleUrls: ['./chain-element.component.scss']
})
export class ChainElementComponent implements OnInit {

  @Input() element!: IChainElement;
  @Input() ideaId!: Number;
  @Input() onlyApproved! :boolean;
  @Input() ownerId! : number;
  @Output() newItemEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  isCurrentUserAuthor() : boolean{
    let useId = Number(localStorage.getItem("user_id"));
    if(this.ownerId === useId){
      return true;
    }
    return false;
  }

  approvedChain(){
    this.newItemEvent.emit(this.element.id);
  }

}
