import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IIdea } from '../models/Idea';
import { ILogin } from '../models/ILogin';
import { ITokenResponce } from '../models/ITokenResponce';
import { IRegistration } from '../models/IRegistration';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private apiUrl : string  = 'https://localhost:7008/api';

  constructor(private http : HttpClient) { }

  async login(loginModel: ILogin) : Promise<boolean>{
    var result = await this.http.post<ITokenResponce>(this.apiUrl + "/Auth/Login", loginModel).toPromise();
      if(result?.isSuccess){
        console.log(result);
        localStorage.setItem("access_token", result.result.accessToken);
        localStorage.setItem("refresh_token", result.result.refreshToken);
        localStorage.setItem("user_name", result.result.userName);
        localStorage.setItem("user_id", result.result.userId.toString());
        localStorage.setItem("user_roles", result.result.userRoles.toString());

        return true;
      }
      return false;
  }

  async registration(regModel : IRegistration ) : Promise<boolean>{
    var result = await this.http.post<ITokenResponce>(this.apiUrl + "/Auth/Register", regModel).toPromise();

    if(result?.isSuccess){
      console.log(result);
      localStorage.setItem("access_token", result.result.accessToken);
      localStorage.setItem("refresh_token", result.result.refreshToken);
      localStorage.setItem("user_name", result.result.userName);
      localStorage.setItem("user_id", result.result.userId.toString());
      localStorage.setItem("user_roles", result.result.userRoles.toString());
      return true;
    }

    return false;
  }

  async refresh(refreshToken : string) : Promise<boolean>{
    try{
      const responce =  await this.http.get<ITokenResponce>(this.apiUrl + "/Auth/RefreshToken?refreshToken=" + refreshToken).toPromise();
      if(responce?.isSuccess){
        localStorage.setItem("access_token", responce?.result.accessToken!);
        localStorage.setItem("refresh_token", responce?.result.refreshToken!);
        localStorage.setItem("user_name", responce?.result.userName);
        localStorage.setItem("user_id", responce?.result.userId.toString());
        localStorage.setItem("user_roles", responce?.result.userRoles.toString());

        return true;
      }
      return false;

    }
    catch{
      return false;
    }

    
  }


}
