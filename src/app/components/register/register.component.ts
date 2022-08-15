import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ViewChild('registerform', { static: false })
  // registerForm!: NgForm;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(username:any,firstname:any,lastname:any,password:any,email:any,role:any){
      const reqObject={
        "username":username.value,
        "firstname":firstname.value,
        "lastname":lastname.value,
        "password":password.value,
        "emailAddress":email.value,
        "roles":[role.value]
      }
      const headers = new HttpHeaders({'Content-type': 'application/json'});
      this.http.post('http://localhost:3000/users/api/auth/signup', reqObject, { headers: headers }).subscribe(
       // The response data
      (response) => {
        console.log(response);
      },

      // If there is an error
      (error) => {
        console.log(error);
        alert(error.message);
      },

       // When observable completes
       () => {
        console.log('done!');
        this.router.navigate(['login']);
      }
      );
  }
}
