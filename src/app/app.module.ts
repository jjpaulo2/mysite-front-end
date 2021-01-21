import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { JobExperienceComponent } from './components/job-experience/job-experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ErrorReloadingComponent } from './components/error-reloading/error-reloading/error-reloading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    JobExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    PortfolioComponent,
    ErrorReloadingComponent
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
