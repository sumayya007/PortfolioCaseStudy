import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SamplesComponent } from './samples/samples.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ServicesComponent } from './services/services.component';
import { TestimonySectionComponent } from './testimonysection/testimony-section.component';

const routes: Routes = [
  {path:'landing-page',component:LandingPageComponent},
  {path:'services',component:ServicesComponent},
  {path:'testimony-section',component:TestimonySectionComponent},
  {path:'about',component:AboutComponent},
  {path:'samples',component:SamplesComponent},
  {path:'contact',component:ContactComponent},

];

@NgModule({
  declarations: [],
  
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
