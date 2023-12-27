import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor,isPlatformBrowser } from '@angular/common';
import { TodosItemComponent } from '../todos-item/todos-item.component';
import { TodosDataComponent } from '../todos-data/todos-data.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor,TodosItemComponent,TodosDataComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
todos:Todo[];
constructor(){
   // this.todos = localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")!):[];
  //this.todos = (localStorage.getItem('todo'));
 // this.todos = [];4


}
ngOnInit(){
  this.todos = localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")!):[];

}
deleteTodo(todo:Todo){
  const index = this.todos.indexOf(todo);
  this.todos.splice(index,1);
  localStorage.setItem('todo',JSON.stringify(this.todos));
}
addTodo(todo:Todo){
  this.todos.push(todo);
  localStorage.setItem('todo',JSON.stringify(this.todos));
}
toggleTodo(todo:Todo){
  const index = this.todos.indexOf(todo);
  this.todos[index].active = !this.todos[index].active;
  localStorage.setItem('todo',JSON.stringify(this.todos));

}
}
