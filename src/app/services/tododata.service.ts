import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { newTodo } from '../interfaces/newtodo';
import { ToDoList } from '../interfaces/ToDoListBean';
import { updateTodo } from '../interfaces/updateTodo';

@Injectable({
  providedIn: 'root'
})
export class TododataService {

  constructor(private http : HttpClient) { }
  
  getAllTodos(userName:String):Observable<any>{
    return this.http.get<ToDoList>(`http://localhost:8080/${userName}/todoservice`)
  }

  updateTodo(id:any, body:updateTodo):Observable<any>{
    return this.http.patch(`http://localhost:8080/${id}/todoservice/update`, body)
  }

  createNewTodo(todo:newTodo, userName: String):Observable<any>{
    return this.http.post(`http://localhost:8080/${userName}/todoservice/createtodo`, todo)
  }

  deleteTodo(userName: String , id:Number):Observable<any>{
    return this.http.delete(`http://localhost:8080/${userName}/todoservice/${id}`)
  }

}
