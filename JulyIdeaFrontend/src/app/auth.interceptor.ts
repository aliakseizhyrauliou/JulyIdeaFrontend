import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private  token: string = localStorage.getItem('access_token')!;


  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;
      if (this.token) {
          const modReq = req.clone({
              setHeaders: {
                  'Authorization': 'Bearer ' + this.token
              }
          });
          console.log(this.token);
          return next.handle(modReq);
      }
      return next.handle(req);
  }
}
