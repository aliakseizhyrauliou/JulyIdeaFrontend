import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDialog } from '../models/IDialog';
import { IMessage } from '../models/IMessage';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {


  private apiUrl: string = 'https://localhost:7144/api';
  constructor(private http : HttpClient) { }

  
  getUserDialogs() : Observable<IDialog[]>{
    return this.http.get<IDialog[]>(this.apiUrl + "/Messages/GetUserDialogs");
  }

  sendMessage(message: IMessage) : Observable<IMessage>{
    return this.http.post<IMessage>(this.apiUrl + "/Messages/SendMessage", message);
  }

  checkServer() : Observable<any>{
    return this.http.get<any>(this.apiUrl + "/Messages/CheckServer");
  }

  getMessagesOfTwoUser(companionId : number) : Observable<IMessage[]>{
    return this.http.get<IMessage[]>(this.apiUrl + "/Messages/GetMessagesOfTwoUsers?companionId=" + companionId);
  }

}
