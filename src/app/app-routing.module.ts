import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {CookiesComponent} from "./shared/cookies/cookies.component";
import { AboutComponent } from './landing-page/about/about.component';
const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'cookie-policy',
    component: CookiesComponent
  },
    {
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
