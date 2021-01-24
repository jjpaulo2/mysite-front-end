import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home-page/pages/home/home.component';
import { PortfolioComponent } from './components/home-page/pages/portfolio/portfolio.component';
import { EducationComponent } from './components/home-page/pages/education/education.component';
import { JobExperienceComponent } from './components/home-page/pages/job-experience/job-experience.component';
import { SkillsComponent } from './components/home-page/pages/skills/skills.component';
import { ContactComponent } from './components/home-page/pages/contact/contact.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'education', component: EducationComponent},
  {path: 'job-experience', component: JobExperienceComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'contact', component: ContactComponent},

  {path: 'curriculum', component: CurriculumComponent},

  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
