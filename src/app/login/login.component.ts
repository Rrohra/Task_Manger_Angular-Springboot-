import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authenticationService';
import { HardcodedAuthService } from '../services/hardcoded-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username =""
  public password = ""
  public error_msg="Invalid Credentials"
  public flag = false
  constructor(private router : Router, private activated_route:ActivatedRoute, private hardcodedauth_var :HardcodedAuthService, private authenticationService :AuthenticationService) { }

  ngOnInit(): void {
  }

  /*method(user, pass){                                           //humne two way data binding use kiya hai issliye farak nahi padhta var as a paarmeter lene ka 
    ngif(this.username! = user) &&(this.password = pass)
  }*/

  method(){
    /*if(this.password==="rohra1")
    {
      this.flag=false;

      //redirect to welcome page
      this.router.navigate(['welcome', this.username])                              //it helps us to route to a different page
      this.activated_route.snapshot.params['name']
    }
    else{
      this.flag=true
    }*/

    //auth using authentication service
    //***********below is hardcoded authentication */
    /*if(this.hardcodedauth_var.authenticate(this.username, this.password)){
      this.flag=false;
      
      //redirect to welcome page
      this.router.navigate(['welcome', this.username])                              //it helps us to route to a different page
      this.activated_route.snapshot.params['name']
    }
    else{
      this.flag=true;
    }*/

    //*********************Service based authentication***** */
    this.authenticationService.authenticateJWT(this.username, this.password).subscribe(res=>{
      this.flag=false;
      this.router.navigate(['/welcome', this.username])                              //it helps us to route to a different page
    },
  error=>{
      this.flag=true;
      console.log("Following error reported - "+error);
    })    
  }

}
