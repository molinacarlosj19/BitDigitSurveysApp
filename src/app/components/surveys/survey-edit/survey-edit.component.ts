import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Surveys } from 'src/app/model/survey.model';
import { SurveysRepo } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-survey-edit',
  templateUrl: './survey-edit.component.html',
  styleUrls: ['./survey-edit.component.css']
})
export class SurveyEditComponent implements OnInit {

  title!: string;

  editing = false;
  surveys: Surveys = new Surveys();
  surveyForm!: FormGroup;
  enableSubmission = false;

  constructor(private formBuilder: FormBuilder,
    private repository: SurveysRepo,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.editing = this.activeRoute.snapshot.params['update'] === 'edit';
    this.repository.refresh();

    if (this.editing) {
      let cloneObj = Object.assign(this.surveys, this.repository.getSurvey(this.activeRoute.snapshot.params['id']));
      //let cloneObj = Object.assign({}, this.tournamentForm.getRawValue(), this.tournament);
      this.surveyForm.patchValue(cloneObj);
  }
}

  onSubmit() {
    if (this.enableSubmission) {

      this.repository.modifySurveys(this.surveyForm.value, this.surveyForm.value._id);
      this.router.navigateByUrl('/survey-mgmt/list');
    }
  }
  returnToSurveyList() {
    this.router.navigateByUrl('/survey-mgmt/list');
  }

}












