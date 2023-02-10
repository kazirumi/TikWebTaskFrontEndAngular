import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  readonly rootURL = 'http://localhost:3000/users/';
  constructor(private http: HttpClient) { }

  //method for Login
  Login(formdata: any) {
    let body = {
      username: formdata.email,
      passWord: formdata.password
    };
    return this.http.post(this.rootURL + "login",body);
  }

}
