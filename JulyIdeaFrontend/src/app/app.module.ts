import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
