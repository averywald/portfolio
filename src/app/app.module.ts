import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleHeaderComponent } from './components/title-header/title-header.component';
import { SectionContainerComponent } from './components/section-container/section-container.component';
import { SectionBlurbComponent } from './components/section-blurb/section-blurb.component';
import { DataService } from './services/data/data.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { EditorComponent } from './components/editor/editor.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TitleHeaderComponent,
    SectionContainerComponent,
    SectionBlurbComponent,
    SidebarComponent,
    LoginComponent,
    PortfolioComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
