import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthenticationService } from "../shared/user-authentication.service";
import * as alertifyjs from "alertifyjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  formModel={
    Email:'',
    Password:''
  }
  constructor(private userAuthenticationService:UserAuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.userAuthenticationService.Login(form.value).subscribe(
      (res:any)=>{
        console.log(res);
        localStorage.setItem("token",res.accesstoken);
        localStorage.setItem("refreshToken",res.refreshtoken);
        alertifyjs.success("Login Successfull");
        this.router.navigate(['productlist']);
      },
      err=>{
        alertifyjs.error(err.error.toString());
        console.log(err.error);
      }
    );
  }

}
