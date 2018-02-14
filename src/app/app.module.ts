import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinksListComponent } from './links-list/links-list.component';
import { LinkChildComponent } from './links-list/link-child/link-child.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityComponent } from './activity-list/activity/activity.component';
import {DataCollectorService} from './data-collector.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LinksListComponent,
    LinkChildComponent,
    ActivityListComponent,
    ActivityComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [DataCollectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
