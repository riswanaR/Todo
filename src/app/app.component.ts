import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoService } from './todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  todos: string[] = [];
  newTodo: string = '';

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = '';
    this.todos = this.todoService.getTodos();
  }

  removeTodo(todo: string): void {
    this.todoService.removeTodo(todo);
    this.todos = this.todoService.getTodos();
  }
}
