

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../../model/model.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SurveyListingComponent } from './survey-listing/survey-listing.component';
import { SurveyEditComponent } from './survey-edit/survey-edit.component';
import { SurveyCreateComponent } from './survey-create/survey-create.component';

const routes = RouterModule.forChild([
  { path: 'list', component: SurveyListingComponent, data: { title: 'Surveys' } },
  { path: 'edit/:id', component: SurveyEditComponent, data: { title: 'Surveys'} },
  { path: 'add', component: SurveyCreateComponent, data: { title: 'Surveys' } },
]);

@NgModule({
  imports: [ModelModule, CommonModule, FormsModule, ReactiveFormsModule, routes],
  providers: [],
  declarations: [SurveyListingComponent, SurveyEditComponent,SurveyCreateComponent,
    ]
})
export class SurveyModule {}
