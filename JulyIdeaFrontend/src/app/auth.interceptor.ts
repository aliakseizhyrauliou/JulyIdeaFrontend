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



  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = localStorage.getItem("access_token");
      if (token) {
          const modReq = req.clone({
              setHeaders: {
                  'Authorization': 'Bearer ' + token
              }
          });
          console.log(token);
          return next.handle(modReq);
      }
      return next.handle(req);
  }
}
