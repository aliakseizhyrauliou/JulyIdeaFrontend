import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './AuthGuard';
import { IdeaInfoComponent } from './components/idea-info/idea-info.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { LoginComponent } from './components/login/login.component';
import { PostHeaderInfoComponent } from './components/startpage/post-header-info/post-header-info.component';
import { StartPageComponent } from './components/startpage/start-page/start-page.component';

const routes: Routes = [
  {path: "", component: StartPageComponent},
  {path: "ideas", component: IdeasComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "details/:id", component: IdeaInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
