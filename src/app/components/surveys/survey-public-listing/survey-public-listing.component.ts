import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Surveys } from 'src/app/model/survey.model';
import { SurveysRepo } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-survey-public-listing',
  templateUrl: './survey-public-listing.component.html',
  styleUrls: ['./survey-public-listing.component.css']
})
export class SurveyPublicListingComponent implements OnInit {

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

 respondSurvey(id: number): void
 {
   this.router.navigateByUrl('/surveys/respond' + id);
 }

}
