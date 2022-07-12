import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { newTodo } from '../interfaces/newtodo';
import { TododataService } from '../services/tododata.service';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css']
})
export class NewtodoComponent implements OnInit {

  constructor(private fb: FormBuilder, private activatedRoute : ActivatedRoute, private tododataservice: TododataService, private router:Router) { }
  userName:any;
  newTodo:newTodo=<newTodo>{};
  todoForm = this.fb.group({
    userName : [{value:'',disabled:true}],
    description :[''],
    isDone:[''],
    tragetDate:[''],
  })
  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['username']
    this.todoForm.controls.userName.setValue(this.userName);
  }
  onSubmit(){
    let desc = this.todoForm.value.description;
    let date = this.todoForm.value.tragetDate;
    let status = this.todoForm.value.isDone;

    this.newTodo.description =desc;
    this.newTodo.tragetDate = date;
    this.newTodo.done= status;
    this.newTodo.username= this.userName;


    this.tododataservice.createNewTodo(this.newTodo, this.userName).subscribe(res=>{console.log(res), this.router.navigate(['todolist',this.userName])});
  }
}
