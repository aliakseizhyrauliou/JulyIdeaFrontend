import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGroup } from '../models/IGroup';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private apiUrl : string  = 'https://localhost:7013/api';

  constructor(private http : HttpClient) { }


  getGroups() : Observable<IGroup[]>{
    return this.http.get<IGroup[]>(this.apiUrl + "/groups/GetAll");
  }
}
