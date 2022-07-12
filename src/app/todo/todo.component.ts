import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoList } from '../interfaces/ToDoListBean';
import { TododataService } from '../services/tododata.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private todoDataService : TododataService , private router:Router) { }
  todoId:number=-1;
  description:any;
  targetDate:any;
  todo: ToDoList=<ToDoList>{};
  username:any;
  ngOnInit(): void {

    this.todoId =this.activatedRoute.snapshot.params['id'];
    this.username=this.activatedRoute.snapshot.params['name'];
  }
  onSubmit(){
    this.todo.description=this.description;
    this.todo.tragetDate=this.targetDate;
    this.todo.id=this.todoId
    this.todoDataService.updateTodo(this.todoId, this.todo).subscribe(
      res=>{console.log(res);
        this.router.navigate(['todolist', this.username])}
      );
  }

}
