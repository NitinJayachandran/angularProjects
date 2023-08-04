import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '/Users/njayachandran/Documents/angular/todofinal/todolist/src/app/task-list/task';
import { taskService } from '../task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Input() 
  newTask: Task = { description: '', completed: false };

  @Output() addTaskEvent = new EventEmitter<Task>();

  constructor(private taskService: taskService) {
  }

  onEnterKey(event: any): void {
    event.preventDefault();
    this.addTask();
  }

  addTask(): void {
    if (this.newTask.description) {
      this.taskService.addTask(this.newTask);
      //this.addTaskEvent.emit(this.newTask);
      this.newTask = { description: '', completed: false };
    }
  }
}



