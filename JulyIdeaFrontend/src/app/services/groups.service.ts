import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGroup } from '../models/IGroup';
import { IGroupUser } from '../models/IGroupUser';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private apiUrl : string  = 'https://localhost:7013/api';

  constructor(private http : HttpClient) { }


  getGroups() : Observable<IGroup[]>{
    return this.http.get<IGroup[]>(this.apiUrl + "/groups/GetAll");
  }

  getGroupById(groupId: number) : Observable<IGroup>{
    return this.http.get<IGroup>(this.apiUrl + "/groups/GetById?groupId=" + groupId);
  }

  joinGroup(groupId: number) : Observable<IGroupUser>{
    return this.http.get<IGroupUser>(this.apiUrl + "/groups/JoinGroup?groupId=" + groupId);
  }

  leaveGroup(groupId: number) : Observable<boolean>{
    return this.http.get<boolean>(this.apiUrl + "/groups/LeaveGroup?groupId=" + groupId);
  }
}
