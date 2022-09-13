import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user! : IUser;
  constructor(private userService: UserService,
    private _activatedroute : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(){
    const userName = this._activatedroute.snapshot.paramMap.get('userName');
    this.userService.getUserProfileByUserName(userName!)
      .subscribe(x => this.user = x);
  } 

}
