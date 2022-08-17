import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Surveys } from 'src/app/model/survey.model';
import { SurveysRepo } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-survey-listing',
  templateUrl: './survey-listing.component.html',
  styleUrls: ['./survey-listing.component.css']
})
export class SurveyListingComponent implements OnInit {
  title!: string;
  constructor(private repository: SurveysRepo,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  this.title = this.route.snapshot.data['title'];
   this.repository.refresh();
  }

  get surveys(): Surveys[]
 {
   return this.repository.getAllSurveys();
 }

 editSurvey(id: number): void
 {
   this.router.navigateByUrl('/survey-mgmt/edit/' + id);
 }

 deleteSurvey(id: number): void
 {
   this.repository.deleteSurvey(id);
   this.router.navigateByUrl('/survey-mgmt/list');
 }




}








