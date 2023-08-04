import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from './task';
import { taskService } from '../task-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  //@Input() newTask: Task = { description: '', completed: false };
  //@Output() deleteTaskEvent = new EventEmitter<Task>();

  tasks: Task[] = [];
  completedTasks: Task[] = [];
  isCompletedTasksVisible = false;

  constructor(private taskService: taskService) {}

  ngOnInit(): void {
    
    this.tasks = this.taskService.getTasks();
    this.completedTasks = this.taskService.getCompletedTasks();
  }

  addTask(task: Task): void {
    if (task.description) {
      //this.taskService.addTask(task);
      this.tasks = this.taskService.getTasks();
      this.completedTasks = this.taskService.getCompletedTasks();
    }
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
    this.tasks = this.taskService.getTasks();
    this.completedTasks = this.taskService.getCompletedTasks();
  }

  toggleTaskCompletion(task: Task): void {
    this.taskService.toggleTaskCompletion(task);
    this.completedTasks = this.taskService.getCompletedTasks();
  }

  showCompletedTasks(): void {
    this.isCompletedTasksVisible = true;
  }

  hideCompletedTasks(): void {
    this.isCompletedTasksVisible = false;
  }

  resetList(): void {
    this.taskService.resetList();
    this.tasks = this.taskService.getTasks();
    this.completedTasks = this.taskService.getCompletedTasks();
  }
}
