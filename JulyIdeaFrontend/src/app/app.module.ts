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
import { HttpClientModule } from '@angular/common/http';
import { SingleIdeaComponent } from './components/ideas/single-idea/single-idea.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
