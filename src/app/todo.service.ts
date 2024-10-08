import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: string[] = [];

  constructor() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  addTodo(todo: string): void {
    this.todos.push(todo);
    this.updateLocalStorage();
  }

  removeTodo(todo: string): void {
    this.todos = this.todos.filter(t => t !== todo);
    this.updateLocalStorage();
  }

  getTodos(): string[] {
    return this.todos;
  }

   updateLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
