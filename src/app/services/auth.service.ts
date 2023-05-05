import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://example.com/api/auth';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    const url = `${this.apiUrl}/login`;
    const body = { username, password };
    return this.http.post<any>(url, body, this.httpOptions).pipe(
      map(response => {
        const token = response.token;
        const user = response.user;
        localStorage.setItem('token', token);
        return user;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  forgotPassword(email: string): Observable<boolean> {
    const url = `${this.apiUrl}/forgot-password`;
    const body = { email };
    return this.http.post<any>(url, body, this.httpOptions).pipe(
      map(response => {
        return response.success;
      })
    );
  }
}