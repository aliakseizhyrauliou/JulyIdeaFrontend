import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IIdea } from '../models/Idea';

@Injectable({
  providedIn: 'root'
})
export class IdeasServiceService {

  private apiUrl : string  = 'https://localhost:7171/api';
  constructor(private http : HttpClient) { }

  getIdeas() : Observable<IIdea[]>{
    return this.http.get<IIdea[]>(this.apiUrl + "/Ideas/GetAllIdeas")
  }
}
