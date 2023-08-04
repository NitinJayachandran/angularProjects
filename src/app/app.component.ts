
import { Component } from '@angular/core';
import { Task } from '/Users/njayachandran/Documents/angular/todofinal/todolist/src/app/task-list/task';
import { taskService } from '/Users/njayachandran/Documents/angular/todofinalservice/todolist/src/app/task-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title: string = "todolist"
   newTask: Task = {description : '',completed : false};
   //tasks: Task[] = [];
  constructor(private taskService: taskService){
    //this.tasks = this.taskService.getTasks();
  }

  addTask(task: Task): void {
    this.taskService.addTask(task);
    this.newTask = { description: '', completed: false };
  }

  /*deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
    this.tasks = this.taskService.getTasks();
  }

  resetList(): void {
    this.taskService.resetList();
    this.tasks = this.taskService.getTasks();
  }*/
}
