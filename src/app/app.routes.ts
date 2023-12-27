import { Routes } from '@angular/router';
import { TodosComponent } from './myComponents/todos/todos.component';
import { AboutComponent } from './myComponents/about/about.component';

export const routes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutComponent },
  
];
