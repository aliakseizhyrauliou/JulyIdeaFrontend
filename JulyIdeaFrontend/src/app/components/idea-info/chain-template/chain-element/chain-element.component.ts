import { Component, Input, OnInit } from '@angular/core';
import { IChainElement } from 'src/app/models/IChainElement';

@Component({
  selector: 'app-chain-element',
  templateUrl: './chain-element.component.html',
  styleUrls: ['./chain-element.component.scss']
})
export class ChainElementComponent implements OnInit {

  @Input() element!: IChainElement;
  @Input() onlyApproved! :boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
