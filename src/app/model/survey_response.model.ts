
export class SurveyResponse{
  constructor(
public _id?:number,
public ResponseId?: String,
public Response?: String,
public QuestionId?: String,
public SurveyQuestionId?: String
){}
public toString(): string
{
    return `
    SurveyResponses
    -------------------------------
    Id         : ${this._id}
    ResponseId      : ${this.ResponseId}
    Response      : ${this.Response}
    QuestionId   : ${this.QuestionId}
    SurveyQuestionId : ${this.SurveyQuestionId}
    `;
}
}
