import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() userName!: string;
  @Input() isAuthentificated!: boolean;
  constructor(private router: Router) {
    if(this.isAuthentificated){
      this.userName = localStorage.getItem("user_name")!;
    }
   }



  ngOnInit(): void {
 
  }

  logout(){
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_name");
    this.router.navigate(["login"]); 
  }

}
