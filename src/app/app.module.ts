import { NavigationComponent } from './component/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PeopleComponent } from './element/people/people.component';
import { DocumentsComponent } from './element/documents/documents.component';
import { VideosComponent } from './element/videos/videos.component';
import { ActivityComponent } from './element/activity/activity.component';
import { ChannelsComponent } from './element/channels/channels.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavigationComponent,
    PeopleComponent,
    DocumentsComponent,
    VideosComponent,
    ActivityComponent,
    ChannelsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
