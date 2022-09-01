import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeasComponent } from './components/ideas/ideas.component';
import { PostHeaderInfoComponent } from './components/startpage/post-header-info/post-header-info.component';
import { StartPageComponent } from './components/startpage/start-page/start-page.component';

const routes: Routes = [
  {path: "", component: StartPageComponent},
  {path: "ideas", component: IdeasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
