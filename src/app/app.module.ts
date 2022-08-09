import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SurveyPublicListingComponent } from './components/surveys/survey-public-listing/survey-public-listing.component';
import { SurveyResponseComponent } from './components/surveys/survey-response/survey-response.component';





@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProtectedComponent,
    ContactusComponent,
    SurveyPublicListingComponent,
    SurveyResponseComponent
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
