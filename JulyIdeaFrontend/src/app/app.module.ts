import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContentComponent } from './components/main-content/main-content.component';
import { PostHeaderInfoComponent } from './components/startpage/post-header-info/post-header-info.component';
import { StartInfoBodyComponent } from './components/startpage/start-info-body/start-info-body.component';
import { StartPageComponent } from './components/startpage/start-page/start-page.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SingleIdeaComponent } from './components/ideas/single-idea/single-idea.component';
import { LoginComponent } from './components/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AuthInterceptor } from './auth.interceptor';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuard } from './AuthGuard';
import { IdeaSearchComponent } from './components/idea-search/idea-search.component';
import { IdeaInfoComponent } from './components/idea-info/idea-info.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ChainElementComponent } from './components/idea-info/chain-template/chain-element/chain-element.component';
import { ChainTemplateComponent } from './components/idea-info/chain-template/chain-template.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { UserIdeasComponent } from './components/my-profile/user-ideas/user-ideas.component';
import { CreateIdeaComponent } from './components/create-idea/create-idea.component';
import { RegComponent } from './components/reg/reg.component';
import { CreateElementComponent } from './components/idea-info/create-element/create-element.component';
import { UsersComponent } from './components/users/users.component';
import { SingleUserComponent } from './components/users/single-user/single-user.component';
import { GroupsComponent } from './components/groups/groups.component';
import { SingleGroupsComponent } from './components/groups/single-groups/single-groups.component';


export function tokenGetter() { 
  return localStorage.getItem("access_token"); 
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    PostHeaderInfoComponent,
    StartInfoBodyComponent,
    StartPageComponent,
    IdeasComponent,
    SingleIdeaComponent,
    LoginComponent,
    IdeaSearchComponent,
    IdeaInfoComponent,
    ChainElementComponent,
    ChainTemplateComponent,
    MyProfileComponent,
    UserIdeasComponent,
    CreateIdeaComponent,
    RegComponent,
    CreateElementComponent,
    UsersComponent,
    SingleUserComponent,
    GroupsComponent,
    SingleGroupsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NgbModule,
    MatTabsModule,
    MatSelectModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:4200"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true},
    [AuthGuard]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
