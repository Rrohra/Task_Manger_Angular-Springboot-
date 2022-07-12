import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { HelloWorldBean } from '../interfaces/HelloWorldBean';



//export class HelloWorldBean{
  //public  message : any;
  //constructor(public message : String){}     //taki angular ko pata chale yeh type ka object recieve hoga
//}  //not a good practice, use interfaces.


/*export interface HelloWorldBean{
  message: String;
}*/

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  
  constructor(private http : HttpClient) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')    //.get() does not exist pon HttpClientMpodule
  }

  executeHelloWorldBeanService_withname(name_: string){
    let basicauthorisation = this.createBasicAuthenticationHttpHeader();
    let header = new HttpHeaders({
      Authorization: basicauthorisation
    })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name_}`)    //.get() does not exist pon HttpClientMpodule
  }

  createBasicAuthenticationHttpHeader(){
    let username='rohit';
    let password ='legend';
    let basicAuthHeaderString ='Basic '+ window.btoa(username+':'+password);
    return basicAuthHeaderString;
  }
  
}
