import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authenticationService';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private authenticationService:AuthenticationService) { }
  intercept(request : HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { //intercepting any outgoing request
    // let username='rohit';
    // let password='legend';
    // let basicAuthHeaderString='Basic '+window.btoa(username+':'+password) //no need of hardcoded values

    //we will send headers only if user is verified , and we ll get the header values from the tokens stored in session
    //during login

    let basicAuthHeaderString = this.authenticationService.getAuthenticatedToken();
    let user = this.authenticationService.getAuthenticatedUser();

    if(basicAuthHeaderString && user){
    request=request.clone({
      setHeaders:{
        Authorization:basicAuthHeaderString    //anything as key , value should be Basic scjjcne....
                                              //adding authorisation and all
      }
    })
    }
    return next.handle(request);           //continuing the remaining execution
  
}
}
