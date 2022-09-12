import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './AuthGuard';
import { CreateIdeaComponent } from './components/create-idea/create-idea.component';
import { GroupsComponent } from './components/groups/groups.component';
import { IdeaInfoComponent } from './components/idea-info/idea-info.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { RegComponent } from './components/reg/reg.component';
import { PostHeaderInfoComponent } from './components/startpage/post-header-info/post-header-info.component';
import { StartPageComponent } from './components/startpage/start-page/start-page.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: "", component: StartPageComponent},
  {path: "ideas", component: IdeasComponent},
  {path: "login", component: LoginComponent},
  {path: "registration", component: RegComponent},
  {path: "details/:id", component: IdeaInfoComponent},
  {path: "myprofile", component: MyProfileComponent, canActivate: [AuthGuard]},
  {path: "createidea", component: CreateIdeaComponent, canActivate: [AuthGuard]},
  {path: "users", component: UsersComponent},
  {path: "groups", component: GroupsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
