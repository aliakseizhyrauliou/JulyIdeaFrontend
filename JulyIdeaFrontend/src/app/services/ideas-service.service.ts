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
  private isGetAllLast: boolean = true;

  getIdeas() : Observable<IIdea[]>{
    return this.http.get<IIdea[]>(this.apiUrl + "/Ideas/GetAllIdeas");
    
  }

  findIdeaByName(name: string) : Observable<IIdea[]>{
    if(!name || name.trim() === ""){
      return this.getIdeas();
    }
    return this.http.get<IIdea[]>(this.apiUrl + "/Ideas/GetIdeaByName?name=" + name);
  }

  getIdeaById(id: number) : Observable<IIdea>{
    return this.http.get<IIdea>(this.apiUrl + "/Ideas/GetIdeaById?ideaId=" + id);
  }
}
