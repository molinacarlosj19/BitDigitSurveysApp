import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private authService:AuthService
  ) { }

  //message: String

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/users/protected').subscribe(
      (response) => {
        if (response) {
          //this.message = response.msg;
          console.log(response)
        }
      },

      (error) => {
        if (error.status === 401) {
         // this.message = 'You are not authorized to visit this route.  No data is displayed.';
        }

        console.log(error);
      }, 

      () => {
        console.log('HTTP request done');
      }
    
    )
  }

}
