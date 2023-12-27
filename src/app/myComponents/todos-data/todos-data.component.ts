import { Component ,EventEmitter,NgModule,Output} from '@angular/core';
import { FormsModule,  } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todos-data.component.html',
  styleUrl: './todos-data.component.scss'
})
export class TodosDataComponent {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  title:string;
  desc:string;
  onSubmit(){
    const todo = {
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.addTodo.emit(todo);
  }
}
