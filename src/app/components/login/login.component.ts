import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private service:AuthService
  ) { }


  ngOnInit(): void {
  }

  onLoginSubmit(username:any,password:any) {
    const reqObject={
      "username":username.value,
      "password":password.value
    }
    console.log(username.value)
    console.log(password.value)
    this.http.post('http://localhost:3000/users/login',reqObject,{}).subscribe((response:any)=>{
      console.log(response)
    })
  }
}
