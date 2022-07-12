import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  authenticate(username: string, password: string):Observable<any>{ //login se yahan call hoga
    
    let basicAuthHeaderString='Basic '+window.btoa(username+':'+password)
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
      return this.http.get(`http://localhost:8080/basicauth`,{headers:header})
      .pipe(
        map(
          data=> {
            sessionStorage.setItem('key', username);   //if response is returned set sessionstorage
            sessionStorage.setItem('authheader',basicAuthHeaderString) //to see in interceptor whether header has to be sent or not
          },
        ),
        catchError(error=>{
          console.log("Following error was reported from service itself- "+error)
          return throwError(error);
        },
        )
      )
    }

  authenticateJWT(username:string, password:string):Observable<any>{
    return this.http.post<any>(`http://localhost:8080/authenticate`,{username:username, password:password}) //syntax (url, boyd, options)
      .pipe(
        map(
          data=>{
            sessionStorage.setItem('key', username);
            sessionStorage.setItem('authheader',`Bearer ${data.token}`)
            return data;
          },
          catchError(error=>{
            console.log("Following error was reported from service itself- "+error)
            return throwError(error);
          })
        )
      )
  }

    isUserLoggedIn(){
      let user = sessionStorage.getItem("key");
      return !(user===null);              //returns true if user loggen in    return false if user not logged in.
  
    }

    getAuthenticatedUser(){
      return sessionStorage.getItem("key");
    }

    getAuthenticatedToken(){
      if(this.getAuthenticatedUser())
        return sessionStorage.getItem("authheader")
      return '';
    }
  

  
}
