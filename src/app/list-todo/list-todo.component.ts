import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TododataService } from '../services/tododata.service';


// export class Todo{
//   constructor(
//     public id:number,
//     public description:string,
//     public done:boolean,
//     public targetDate: Date
//   ){}
// }
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todos: any;
  name: any;

  // todos=[
  //   new Todo(1, "Cleant he room", true, new Date()),
  //   new Todo(2, "Learn Angular", false, new Date()),
  //   new Todo(3, "make the sopecs",false,new Date())
  //   /*{id: 1 , description: "Clean the room"},
  //   {id:2, description: "Complete the mandatory courses"}, */
  // ]
  constructor( private toDoService :TododataService, private activatedRoute :ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.params['name']
    this.refreshTodos(this.name);
    
  }

  refreshTodos(name:String){
    this.toDoService.getAllTodos(this.name).subscribe((response)=>{
      this.todos= response
      console.log(this.todos)
    })
  }
  updateTodoScreen(id:number){
    this.router.navigate(['todo',id,this.name]);
  }
  createTodo(){
    this.router.navigate(['newtodo',this.name]);
  }

  deleteTodo(id:Number){
    this.toDoService.deleteTodo(this.name, id).subscribe((res)=>{
      console.log(res);
      this.refreshTodos(this.name);
    },
    (error)=>{
      console.log(error)
    })
  }

}
