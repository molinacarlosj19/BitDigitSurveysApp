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
    this.baseUrl = `http://localhost:3000/api/`;
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

  editSurvey(survey: Surveys): Observable<Surveys> {
    //console.log(JSON.stringify(comment));
   // this.loadToken();
    return this.http.post<Surveys>(this.baseUrl + 'survey-mgmt/edit/'+survey._id,survey, this.httpOptions);
  }

  deleteSurvey(id: Object): Observable<Surveys> {
    //this.loadToken();
    //console.log(id);
    return this.http.get<Surveys>(this.baseUrl + 'survey-mgmt/delete/' + id, this.httpOptions);
  }

  getSurveyResponses(id:Object): Observable<SurveyResponse[]> {
    //this.loadToken();
    return this.http.get<SurveyResponse[]>(this.baseUrl + 'surveys/surveyResponses/'+id,this.httpOptions);
  }

  getSurveyQuestions(id:Object):Observable<SurveyQuestion[]> {
    console.log("hello444");
    return this.http.get<SurveyQuestion[]>(this.baseUrl + 'survey-mgmt/questions/'+id,this.httpOptions);
  }
  /*private loadUser(): void {

    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  private loadToken(): void {
    const token = localStorage.getItem('id_token');
    this.authToken = token || '';
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }

  logout(): Observable<any> {
    this.authToken = null || '';
    this.user = null;
    localStorage.removeItem('user');
    localStorage.removeItem('id_token');


    return this.http.get<any>('http://localhost:3000/' + 'logout', this.httpOptions);
  }

  loggedIn(): boolean {
    // console.log(this.authToken);
    this.loadToken();
    return !this.jwtService.isTokenExpired(this.authToken);
  }

  getDisplayName(): string {
    this.loadUser();

    if (this.user != null)
      return this.user.displayName;
    else
        return '';
  }

  getUsername(): String {
    this.loadUser();

    if (this.user != null)
      return this.user.username;
    else
        return '';
  }*/
}

