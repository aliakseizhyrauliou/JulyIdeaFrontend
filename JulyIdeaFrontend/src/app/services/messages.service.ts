import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDialog } from '../models/IDialog';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {


  private apiUrl: string = 'https://localhost:7144/api';
  constructor(private http : HttpClient) { }

  
  getUserDialogs() : Observable<IDialog[]>{
    return this.http.get<IDialog[]>(this.apiUrl + "/Messages/GetUserDialogs");
  }

}
