import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListTodoComponent } from '../list-todo/list-todo.component';
import { WelcomeDataService } from '../services/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public welcome_msg="Welcome welcome .."
  public name=''
  data:any;
  constructor(private activated_route :ActivatedRoute, private route:Router, private welcomeservice: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.activated_route.snapshot.params['name']
  }

  toDoList(){
    this.route.navigate(['todolist',this.name] );
  }

  getwelcomemsg(){
    this.welcomeservice.executeHelloWorldBeanService().subscribe(   //subscribe is an async call , hum uspe ek function band ke chhod rahe hai
      response =>this.handlewelcomebean(response),
      error => this.handleerrorwelcomebean(error)
    );

  }
  getwelcomemsg_withname(){
    this.welcomeservice.executeHelloWorldBeanService_withname(this.name).subscribe(   //subscribe is an async call , hum uspe ek function band ke chhod rahe hai
                                                                                      //yahan naam upar login se aaraha hai
      response =>console.log(response.message),
      error => this.handleerrorwelcomebean(error)
    );

  }
  
  handlewelcomebean(res:any){
    this.data =res.message;
  }

  handleerrorwelcomebean(err:any){
    this.data = err.error.message;
    console.log(err);
    console.log(err.error);


    
  }
}
