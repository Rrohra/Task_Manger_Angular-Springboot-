import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authenticationService';
import { HardcodedAuthService } from './hardcoded-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate{

  constructor(private hardcodedauth_var : HardcodedAuthService, private router: Router, private authenticationService :AuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    // if(this.hardcodedauth_var.isUserLoggedIn()){
    // return true;
    if(this.authenticationService.isUserLoggedIn()){    //this will call antoehr function in auth service and check if session key is present, if yes then route to welcome, if not then no.
      return true;
    }
    this.router.navigate(['login']);
    return false;

    }
}
