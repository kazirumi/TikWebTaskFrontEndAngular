import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  readonly rootURL = 'http://localhost:3000/users/';
  constructor(private http: HttpClient,private router:Router) { }

  //method for Login
  Login(formdata: any) {
    let body = {
      username: formdata.email,
      password: formdata.password
    };
    return this.http.post(this.rootURL + "login",body);
  }

  //method for logout
  Logout(){
    alert("your session expired")
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }

  generateAccessTokenFromRefreshToken(){
    return this.http.post(this.rootURL+"generateAccessTokenFromRefreshToken",{refreshToken:localStorage.getItem("refreshToken")});
  }

}
