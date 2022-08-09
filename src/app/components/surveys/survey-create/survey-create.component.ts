import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Surveys } from 'src/app/model/survey.model';
import { SurveysRepo } from 'src/app/model/survey.repository';


@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.css']
})
export class SurveyCreateComponent implements OnInit {

  title!: string;
  surveyId!: number;
  surveyForm!: FormGroup;

  constructor(
    private repository: SurveysRepo,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this.activeRoute.snapshot.data['title'];
    this.repository.refresh();
    this.surveyId = this.activeRoute.snapshot.params["id"];
  }
  onSubmit() {
    console.log(this.surveyForm.value);
    this.repository.createSurvey(this.surveyForm.value);
    this.router.navigateByUrl('/survey-mgmt/list');
  }


  returnToSurveyList() {
    this.router.navigateByUrl('/survey-mgmt/list');
  }

}












