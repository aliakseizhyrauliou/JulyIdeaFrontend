import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChainElement } from '../models/IChainElement';

@Injectable({
  providedIn: 'root'
})
export class ChainService {

  private apiUrl : string  = 'https://localhost:7048/api';
  constructor(private http : HttpClient) { }

  getElementsByIdeaId(ideaId: number, onlyApproved: boolean = false) : Observable<IChainElement[]>{
    console.log(ideaId);
    return this.http.get<IChainElement[]>(this.apiUrl + `/chain/GetChainElementsByIdeaId?ideaId=${ideaId}&onlyApproved=${onlyApproved}`);
  }

  approvedElement(elementId: number) : Observable<IChainElement>{
    return this.http.get<IChainElement>(this.apiUrl + `/chain/ConfirmChainElement?chaninId=${elementId}`);
  }

  createElement(element: IChainElement) : Observable<IChainElement>{
    return this.http.post<IChainElement>(this.apiUrl + "/chain/CreateChainElement", element);
  }

  
}
