import { NgModule } from "@angular/core";
import { SurveysRepo } from "./survey.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


@NgModule({
    imports: [HttpClientModule, FormsModule],
    providers: [SurveysRepo,
        RestDataSource
            //provide: JwtHelperService,
            //useFactory: () => new JwtHelperService()
          ],

})
export class ModelModule{

}
