import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task'
import {TaskService} from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskServices: TaskService) { }

  ngOnInit(): void {
    this.taskServices.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task){
        this.taskServices
          .deleteTasks(task)
          .subscribe(
            () => (this.tasks = this.tasks.filter((t) => t.id !==
              task.id))
            );
  }

}
