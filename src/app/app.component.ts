import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'activity-tracker';
  done: boolean;  //boolean value which stores value-"true" if check box is clicked
  todos: any;     //array to store activities
  newToDo: string;  //new activity added value
  newToDoObj: any;
  error: boolean;   //if user doenot type anything in the input text box
  //constructor with todos as [] ,newToDo as '' , done and error as false
  constructor(){
    this.done = false;
    this.todos = [];
    this.error = false;
    this.newToDo = "";
  }
  //isPresent() method to check if string is empty and display err message
  isPresent(){
    if(this.newToDo.length == 0){
      this.error =  true;
    }else{
      this.error =  false;
    }
  }
  //addMore function to add new activities to the array
  addMore(){
    if(this.error == false){
      this.todos.push({done: false, item: this.newToDo});
    }
  }
  //clearAll function to clear all the activities
  clearAll(){
    this.todos = [];
  }
  //checkBoxDone() method to update done value
  checkBoxDone(){
    this.done = !this.done;
  }
}
