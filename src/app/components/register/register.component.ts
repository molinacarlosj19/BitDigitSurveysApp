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

  onRegisterSubmit(username:any,password:any,email:any){
      const reqObject={
        "username":username.value,
        "password":password.value,
        "email":email.value
      }
      console.log(username.value)
      console.log(password.value)
      console.log(email.value)
      const headers = new HttpHeaders({'Content-type': 'application/json'});
      this.http.post('http://localhost:3000/users/register', reqObject, { headers: headers }).subscribe(
       // The response data
      (response) => {
        console.log(response);
      },

      // If there is an error
      (error) => {
        console.log(error);
      },

       // When observable completes
       () => {
        console.log('done!');
        this.router.navigate(['login']);
      }
      );
  }



    // Submits a post request to the /users/register route of our Express app
    // onRegisterSubmit() {
    //   const username = this.registerForm.value.username ;
    //   const password = this.registerForm.value.password;
  
    //   const headers = new HttpHeaders({'Content-type': 'application/json'});
  
    //   const reqObject = {
    //     username: username,
    //     password: password
    //   };
  
    //   this.http.post('http://localhost:3000/users/register', reqObject, { headers: headers }).subscribe(
        
    //     // The response data
    //     (response) => {
    //       console.log(response);
    //     },
  
    //     // If there is an error
    //     (error) => {
    //       console.log(error);
    //     },
        
    //     // When observable completes
    //     () => {
    //       console.log('done!');
    //       this.router.navigate(['login']);
    //     }
  
    //   );
    // }

}
