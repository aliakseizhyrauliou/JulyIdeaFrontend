import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IChainElement } from 'src/app/models/IChainElement';
import { ChainService } from 'src/app/services/chain.service';

@Component({
  selector: 'app-create-element',
  templateUrl: './create-element.component.html',
  styleUrls: ['./create-element.component.scss']
})
export class CreateElementComponent implements OnInit {

  elementForm : FormGroup;
  element : IChainElement;
  @Input() ideaId!: number;
  @Input() ownerId! : number;
  @Output() addElement = new EventEmitter<IChainElement>();


  constructor(private chainService: ChainService) { 
    this.elementForm = new FormGroup({
      "name" : new FormControl('', Validators.required),
      "description" : new FormControl('', Validators.required),
      "rootIdeaId" : new FormControl('', Validators.required),
      "rootIdeaOwnerId": new FormControl('', Validators.required)
    })

    this.element = {} as IChainElement;
  }

  ngOnInit(): void {
    
  }

  createElement() : void{
    this.elementForm.get("rootIdeaId")?.setValue(this.ideaId);
    this.elementForm.get("rootIdeaOwnerId")?.setValue(this.ownerId);

    let element = Object.assign(this.element, this.elementForm.value);
    this.addElement.emit(element);
    this.element = {} as IChainElement;
  }

}
