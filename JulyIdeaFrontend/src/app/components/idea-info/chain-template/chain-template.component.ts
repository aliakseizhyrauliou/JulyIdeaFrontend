import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IChainElement } from 'src/app/models/IChainElement';
import { ChainService } from 'src/app/services/chain.service';

@Component({
  selector: 'app-chain-template',
  templateUrl: './chain-template.component.html',
  styleUrls: ['./chain-template.component.scss']
})
export class ChainTemplateComponent implements OnInit {

  @Input() ideaId!: number;
  @Input() onlyApproved!: boolean;
  @Input() ownerId! : number;

  elements!: IChainElement[];

  constructor(private chainService: ChainService) { }

  ngOnInit(): void {
    this.getChainElementsOfIdea(this.ideaId, this.onlyApproved);
    console.log(this.elements);
  }

  getChainElementsOfIdea(ideaId: number, onlyApproved: boolean) : void{
    this.chainService.getElementsByIdeaId(ideaId, onlyApproved)
      .subscribe(elements => this.elements = elements);
  }

  approvedElement(elementId : number){
    this.chainService.approvedElement(elementId)
      .subscribe(x => {
        let index = this.elements.findIndex(q => q.id === x.id);
        this.elements[index].isConfirmed = true;
      }); 

  }

  addElement(element: IChainElement){
    this.chainService.createElement(element)
      .subscribe(x => this.elements.unshift(x));
  }

}
