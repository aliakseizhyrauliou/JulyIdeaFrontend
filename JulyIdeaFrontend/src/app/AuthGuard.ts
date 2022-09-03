import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ITokenResponce } from './models/ITokenResponce';
import { LoginService } from './services/login.service';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate  {
  constructor(private router:Router, 
    private jwtHelper: JwtHelperService,
    private loginService: LoginService){}
  
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger;
    const token = localStorage.getItem("access_token");
    
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }

    const isRefreshSuccess = await this.refreshingTokens(token)
    if (!isRefreshSuccess) {
        this.router.navigate(["login"]);
        return false; 
    }

    return isRefreshSuccess;

  }

  private async refreshingTokens(token: string | null): Promise<boolean> {
    const refreshToken: string | null = localStorage.getItem("refresh_token");
    

    if (!token || !refreshToken) {
      return false;
    }


    let isRefreshSuccess: boolean;
    try {

      const response = await this.loginService.refresh(refreshToken);
      if(response){
        isRefreshSuccess = true;
      }
      else{
        isRefreshSuccess = false;
      }
    }
    catch (ex) {
      isRefreshSuccess = false;
    }
    return isRefreshSuccess;
  }
}