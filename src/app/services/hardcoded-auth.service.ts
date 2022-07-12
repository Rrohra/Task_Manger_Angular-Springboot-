import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username: string , password: string){
      if(username ==="rohit" && password==="rohra1"){

        //now we will use browser sessionmangement to store token
        sessionStorage.setItem("key",username)    //key value store karna hai
        return true;
      }
      return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("key");
    return !(user===null);              //returns true if user loggen in    return false if user not logged in.

  }

  logout(){
    sessionStorage.removeItem("key");
  }
}
