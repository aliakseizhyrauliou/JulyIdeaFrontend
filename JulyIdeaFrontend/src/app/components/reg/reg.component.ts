import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegistration } from 'src/app/models/IRegistration';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {


  regForm: FormGroup;
  regModel: IRegistration;

  constructor(private _loginService :LoginService,
    private _router: Router) {
    this.regModel = {} as IRegistration;
     
    this.regForm = new FormGroup({
      email : new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {

  }

  async registration(){
    debugger;
    if(!this.regForm.valid){
      return;
    }
    this.regModel = Object.assign(this.regModel, this.regForm.value);
    var registrationResult = await this._loginService.registration(this.regModel);
    if(registrationResult){
     this._router.navigate(["ideas"]); 
    }
  }
}

