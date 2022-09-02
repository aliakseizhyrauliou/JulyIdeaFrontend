import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/ILogin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  loginModel: ILogin;

  constructor(private loginService : LoginService, private router : Router) { 
    this.loginModel = {} as ILogin;
  }

  ngOnInit(): void {
  }

  async login(){
    let loginResult = await this.loginService.login(this.loginModel);
    debugger;
    if(loginResult){
      this.router.navigate(['/ideas']);
    }
  }

}
