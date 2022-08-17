import { Injectable } from '@angular/core';
import { Surveys } from './survey.model';
import { SurveyQuestion } from './survey_question.model';
import { SurveyResponse } from './survey_response.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class PubSurveysRepo {
    private surveys: Surveys[] = [];

    constructor(private dataSource: RestDataSource) {
        this.refresh();
    }

    refresh(): void{
        this.dataSource.getPubSurveys().subscribe(data => {

            this.surveys = data;
            this.storeSurveyData(data);
        });
    }

    storeSurveyData(surveys: Surveys[]) {
      localStorage.setItem('surveys', JSON.stringify(surveys));
      this.surveys = surveys;
    }

    loadSurveys(): void{
      this.surveys = JSON.parse(localStorage.getItem('surveys')!);
    }

    getSurvey(id: any): Surveys {
        this.loadSurveys();
        return this.surveys.find(b => b._id == id)!;
    }

    getAllSurveys(){
        this.loadSurveys();
        return this.surveys;
    }

    modifySurveys(savedSurvey: Surveys, id: any): void {
        if (savedSurvey._id === null || savedSurvey._id === 0) {
            this.dataSource.addSurvey(savedSurvey).subscribe(b => {
                this.refresh();
            });
        }
        else {
            this.dataSource.editSurvey(savedSurvey).subscribe(survey => {
                this.refresh();
            });
        }
    }

    createSurvey(surveyDetails: Surveys):void{
      this.dataSource.addSurvey(surveyDetails).subscribe(b => {
        this.refresh();
    });
}

    deleteSurvey(deleteSurveyId: number): void {

        this.dataSource.deleteSurvey(deleteSurveyId).subscribe(tournament => {
            this.refresh();
        });
    }

    /*get authenticated(): boolean {
        return this.dataSource.loggedIn();
    }

    get username(): String {
        return this.dataSource.getUsername();
    }*/
}