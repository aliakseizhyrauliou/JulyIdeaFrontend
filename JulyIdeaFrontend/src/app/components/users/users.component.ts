import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/models/enums/UserRole';
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
    let isAdmin = this.checkIfCurrentUserAdmin();
    debugger;
    this.userServce.getUsers(isAdmin)
      .subscribe(x => this.users = x);
  }

  checkIfCurrentUserAdmin() : boolean{
    if(localStorage.getItem("access_token")){
      var roles = localStorage.getItem("user_roles")?.split(", ");
      return roles?.indexOf(UserRole["Admin"].toString()) != -1;
    }
    return false;
  }
}
