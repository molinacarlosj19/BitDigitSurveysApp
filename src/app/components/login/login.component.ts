import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private authService:AuthService
  ) { }


  ngOnInit(): void {
  }

  onLoginSubmit(username:any,password:any) {
    const reqObject={
      "username":username.value,
      "password":password.value  
    }
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    console.log(username.value)
    console.log(password.value)
    this.http.post('http://localhost:3000/users/login', reqObject, { headers: headers }).subscribe(
      // The response data
      (response) => {
      
        // If the user authenticates successfully, we need to store the JWT returned in localStorage
        this.authService.setLocalStorage(response);
        console.log(response)

      },
    );
  }
}
