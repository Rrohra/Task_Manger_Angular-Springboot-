import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { NewtodoComponent } from './newtodo/newtodo.component';
import { HttpInterceptorBasicAuthService } from './services/http-interceptor-basic-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    WelcomeComponent,
    ListTodoComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
    NewtodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule //dont declare it , import it mofo
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:HttpInterceptorBasicAuthService, multi:true}//HTTP_INTERCEPTORS is the token , use class is its value 
                                                                                          //one token multi value DI is createed over here using multi: true, last one wins
  ],
  bootstrap: [AppComponent] //this line bootstraps the html of app.component   , yeh nahi likha toh index.html mein <app-root> ka meaning hi nahi hoga
})
export class AppModule { }
