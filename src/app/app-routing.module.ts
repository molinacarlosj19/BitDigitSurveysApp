import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'aboutus', component: AboutusComponent },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'contactus', component: ContactusComponent },
  { path: '', redirectTo: '/home',pathMatch:'full'},
  { path: 'survey-mgmt', loadChildren: () => import('./components/surveys/survey.module').then(m => m.SurveyModule)},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
