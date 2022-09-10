import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuard } from '../AuthGuard';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl : string  = 'https://localhost:7008/api';

  constructor(private http : HttpClient) { }

  getCurrentUserProfile() : Observable<IUser>{
    return this.http.get<IUser>(this.apiUrl + "/users/GetCurrentUserInfo");
  }

  getUserProfile(userId: number) : Observable<IUser>{
    return this.http.get<IUser>(this.apiUrl + "/users/GetUserInfo?userId=" + userId);
  }

  getUsers() : Observable<IUser[]>{
    return this.http.get<IUser[]>(this.apiUrl + "/users/GetUsers");
  }
}
