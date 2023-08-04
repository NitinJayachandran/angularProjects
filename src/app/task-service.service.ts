import { Injectable } from '@angular/core';
import { Task } from '/Users/njayachandran/Documents/angular/todofinalservice/todolist/src/app/task-list/task';

@Injectable({
  providedIn: 'root'
})
export class taskService {
  tasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor() { }

  addTask(task: Task): void {
    this.tasks.push(task);
    if (task.completed) {
      this.completedTasks.push(task);
    }
    
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(function (t) {
      return t !== task;
    });
    this.completedTasks = this.completedTasks.filter(function (t) {
      return t !== task;
    });
  }


  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
    if (task.completed) {
      this.completedTasks.push(task);
    } else {
      const index = this.completedTasks.findIndex(t => t === task);
      if (index !== -1) {
        this.completedTasks.splice(index, 1);
      }
    }
  }

  resetList(): void {
    this.tasks = [];
    this.completedTasks = [];
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getCompletedTasks(): Task[] {
    return this.completedTasks;
  }
}
