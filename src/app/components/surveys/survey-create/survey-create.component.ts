import { Component, OnInit } from '@angular/core';
import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    private activeRoute: ActivatedRoute,
    private fb:FormBuilder) {
      this.surveyForm = this.fb.group({
        surveyId: ['', Validators.required],
        surveyTitle: ['', Validators.required],
        surveyDescription: ['', Validators.required],
        surveyCategory: ['', Validators.required],
        username: localStorage.getItem("username"),
        questions: this.fb.array([]) ,
      });
     }

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
  questions() : FormArray {
    return this.surveyForm.get("questions") as FormArray
  }
  newQuestion(): FormGroup {
    return this.fb.group({
      question: ''
    })
  }

  addQuestions() {
    this.questions().push(this.newQuestion());
  }
  removeQuestions(i:number) {
    this.questions().removeAt(i);
  }

  returnToSurveyList() {
    this.router.navigateByUrl('/survey-mgmt/list');
  }

}












