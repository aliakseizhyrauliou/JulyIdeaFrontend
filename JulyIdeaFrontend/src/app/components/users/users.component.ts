import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users! : IUser[];
  constructor(private userServce: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userServce.getUsers()
      .subscribe(x => this.users = x);
  }

}
