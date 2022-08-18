import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Surveys } from './survey.model'
import { SurveyQuestion } from './survey_question.model';
import { SurveyResponse } from './survey_response.model';
import { map } from 'rxjs/operators';
//import { JwtHelperService } from '@auth0/angular-jwt';
//import { User } from './user.model';


const PROTOCOL = 'https';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;
 // user: User | null;
  authToken!: string;

  private httpOptions =
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      })
    };

  constructor(private http: HttpClient) {
    this.baseUrl = `https://comp229-bitdigitsurveys-be.herokuapp.com//api/`;
  }

  getPubSurveys(): Observable<Surveys[]> {
    //this.loadToken();
    return this.http.get<Surveys[]>(this.baseUrl + 'survey-mgmt/list');
  }

  respondSurvey(survey: Surveys): Observable<Comment> {
    //console.log(JSON.stringify(comment));
   // this.loadToken();
    return this.http.post<Comment>(this.baseUrl + 'surveys/respond'+survey._id,survey, this.httpOptions);
  }

  getSurveys(): Observable<Surveys[]> {
    //this.loadToken();
    return this.http.get<Surveys[]>(this.baseUrl + 'survey-mgmt/list');
  }

  addSurvey(survey: Surveys): Observable<Surveys> {
   // console.log(JSON.stringify(survey));
    //this.loadToken();
    return this.http.post<Surveys>(this.baseUrl + 'survey-mgmt/add', survey, this.httpOptions);
  }

  editSurvey(survey: Surveys,id: Object): Observable<Surveys> {
    //console.log(JSON.stringify(comment));
   // this.loadToken();
    return this.http.post<Surveys>(this.baseUrl + 'survey-mgmt/edit/'+id,survey, this.httpOptions);
  }

  deleteSurvey(id: Object): Observable<Surveys> {
    //this.loadToken();
    //console.log(id);
    return this.http.get<Surveys>(this.baseUrl + 'survey-mgmt/delete/' + id, this.httpOptions);
  }


  getSurveyQuestions(id:Object):Observable<SurveyQuestion[]> {
    console.log("hello444");
    return this.http.get<SurveyQuestion[]>(this.baseUrl + 'survey-mgmt/questions/'+id,this.httpOptions);
  }
  addSurveyResponse(surveyResponse: Object): Observable<SurveyResponse> {
    // console.log(JSON.stringify(survey));
     //this.loadToken();
     return this.http.post<Object>(this.baseUrl + 'pub-surveys/respond/add', surveyResponse, this.httpOptions);
   }
}

