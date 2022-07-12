import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NewtodoComponent } from './newtodo/newtodo.component';
import { RouteguardService } from './services/routeguard.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'welcome/:name', component:WelcomeComponent, canActivate:[RouteguardService] }, //this will inject routeguardservicde
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'todolist/:name',component: ListTodoComponent, canActivate:[RouteguardService]},
  {path:'todo/:id/:name',component:TodoComponent},
  {path:'newtodo/:username', component:NewtodoComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
