```
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../models/task.model';
import { Reminder } from '../models/reminder.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://example.com/api/tasks';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/create`, task, { headers: this.getHeaders() });
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/update`, task, { headers: this.getHeaders() });
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<{ tasks: Task[] }>(`${this.apiUrl}`, { headers: this.getHeaders() })
      .pipe(
        map(response => response.tasks.map(task => {
          task.startDate = new Date(task.startDate);
          task.endDate = new Date(task.endDate);
          return task;
        }))
      );
  }

  getTaskDetails(taskId: number): Observable<Task> {
    return this.http.get<{ task: Task }>(`${this.apiUrl}/${taskId}`, { headers: this.getHeaders() })
      .pipe(
        map(response => {
          const task = response.task;
          task.startDate = new Date(task.startDate);
          task.endDate = new Date(task.endDate);
          return task;
        })
      );
  }

  setReminder(taskId: number, reminder: Reminder): Observable<Reminder> {
    return this.http.post<Reminder>(`${this.apiUrl}/${taskId}/reminder`, reminder, { headers: this.getHeaders() });
  }
}
```