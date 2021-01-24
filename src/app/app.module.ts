import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home-page/pages/home/home.component';
import { TopBarComponent } from './components/home-page/top-bar/top-bar.component';
import { JobExperienceComponent } from './components/home-page/pages/job-experience/job-experience.component';
import { EducationComponent } from './components/home-page/pages/education/education.component';
import { SkillsComponent } from './components/home-page/pages/skills/skills.component';
import { ContactComponent } from './components/home-page/pages/contact/contact.component';
import { FooterComponent } from './components/home-page/footer/footer.component';
import { PortfolioComponent } from './components/home-page/pages/portfolio/portfolio.component';
import { ErrorReloadingComponent } from './components/home-page/error-reloading/error-reloading/error-reloading.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';


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
    ErrorReloadingComponent,
    CurriculumComponent
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
