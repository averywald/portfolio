import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleHeaderComponent } from './components/title-header/title-header.component';
import { SectionContainerComponent } from './components/section-container/section-container.component';
import { SectionBlurbComponent } from './components/section-blurb/section-blurb.component';
import { DataService } from './services/data.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleHeaderComponent,
    SectionContainerComponent,
    SectionBlurbComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
