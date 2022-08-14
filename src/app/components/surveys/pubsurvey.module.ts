

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../../model/model.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SurveyListingComponent } from './survey-listing/survey-listing.component';
import { SurveyEditComponent } from './survey-edit/survey-edit.component';
import { SurveyCreateComponent } from './survey-create/survey-create.component';
import { SurveyPublicListingComponent } from './survey-public-listing/survey-public-listing.component';
import { SurveyResponseComponent } from './survey-response/survey-response.component';

const routes = RouterModule.forChild([
  { path: '/list', component: SurveyPublicListingComponent, data: { title: 'Surveys' } },
  { path: 'respond/:id', component: SurveyResponseComponent, data: { title: 'Surveys'} },
]);

@NgModule({
  imports: [ModelModule, CommonModule, FormsModule, ReactiveFormsModule, routes],
  providers: [],
  declarations: [SurveyEditComponent,SurveyCreateComponent,
    SurveyPublicListingComponent]
})
export class PubSurveyModule {}
