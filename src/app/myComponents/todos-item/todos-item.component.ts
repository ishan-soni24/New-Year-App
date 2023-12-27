import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todos-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.scss'
})
export class TodosItemComponent {
  @Input() todo:Todo;
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox:EventEmitter<Todo> = new EventEmitter();

  constructor(){
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
  }
  onCheck(todo:Todo){
    this.todoCheckbox.emit(todo)
    }
}
