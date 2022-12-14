import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './AuthGuard';
import { CreateIdeaComponent } from './components/create-idea/create-idea.component';
import { DialogInfoComponent } from './components/dialogs/dialog-info/dialog-info.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { GroupDetailsComponent } from './components/groups/group-details/group-details.component';
import { GroupsComponent } from './components/groups/groups.component';
import { IdeaInfoComponent } from './components/idea-info/idea-info.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { RegComponent } from './components/reg/reg.component';
import { PostHeaderInfoComponent } from './components/startpage/post-header-info/post-header-info.component';
import { StartPageComponent } from './components/startpage/start-page/start-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
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
  {path: "groups", component: GroupsComponent},
  {path: "profile/:userName", component: UserProfileComponent},
  {path: "group/:id", component: GroupDetailsComponent},
  {path: "dialogs", component: DialogsComponent},
  {path: "dialog/:id", component: DialogInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
