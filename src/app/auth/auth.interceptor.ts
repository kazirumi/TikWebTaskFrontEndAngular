import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError, } from "rxjs";
import { switchMap, tap,catchError } from "rxjs/operators";
import { ProductService } from "../shared/product.service";
import { UserAuthenticationService } from "../shared/user-authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router,private userService:UserAuthenticationService) {
    }

    // middleware for adding header
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token') != null) {
            const clonedReq = this.AddTokenheader(req,localStorage.getItem('token'));
            return next.handle(clonedReq)
                .pipe(
                    catchError(errorData=>{
                        if(errorData.status===401){

                            return this.handleRefreshToken(req,next);
                        }
                        return throwError(errorData);
                    })
                    
                )
        }
        else
            return next.handle(req.clone());
    }

    // access token from refresh token implemented here
    handleRefreshToken(req: HttpRequest<any>, next: HttpHandler){
        
        return this.userService.generateAccessTokenFromRefreshToken().pipe(
                switchMap((data:any)=>{
                    console.log("from refresh token get accesstoken",data.accessToken)
                    localStorage.setItem("token",data.accessToken);
                    return next.handle(this.AddTokenheader(req,data.accessToken));
                }),
                catchError(erorData=>{
                    this.userService.Logout();
                    return throwError(erorData)
                })
            );
        
    }

    AddTokenheader(req: HttpRequest<any>, token) {
        return req.clone({headers:req.headers.set('Authorization', 'Bearer ' + token)});
    }

}