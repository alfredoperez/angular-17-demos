import {Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomePageComponent, data: {animation: 'Home'}},
  {path: 'about', component: AboutPageComponent, data: {animation: 'About'}},
];

