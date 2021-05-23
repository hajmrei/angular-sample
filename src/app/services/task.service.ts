import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../Task';
import {Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }


  getTasks(): Observable<Task[]>{

    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTasks(task: Task): Observable<Task> {

    const url = `${this.apiUrl}/${task.id}`;
    console.log("url: " + url);

    return this.http.delete<Task>(url);

  }

}
