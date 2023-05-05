import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://example.com/api';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getUserProfile(): Observable<User> {
    return this.http.get(`${this.apiUrl}/users/profile`, { headers: this.getHeaders() })
      .pipe(
        map((response: any) => {
          const user = response.user;
          // user.createdAt = new Date(user.createdAt);
          // user.updatedAt = new Date(user.updatedAt);
          return user;
        })
      );
  }

  updateUserProfile(user: User): Observable<User> {
    return this.http.post(`${this.apiUrl}/users/update-profile`, { user }, { headers: this.getHeaders() })
      .pipe(
        map((response: any) => {
          const updatedUser = response.user;
          // updatedUser.createdAt = new Date(updatedUser.createdAt);
          // updatedUser.updatedAt = new Date(updatedUser.updatedAt);
          return updatedUser;
        })
      );
  }

  getTeamMembers(): Observable<User[]> {
    return this.http.get(`${this.apiUrl}/users/team-members`, { headers: this.getHeaders() })
      .pipe(
        map((response: any) => {
          const teamMembers = response.teamMembers;
          teamMembers.forEach((member: User) => {
            // member.createdAt = new Date(member.createdAt);
            // member.updatedAt = new Date(member.updatedAt);
          });
          return teamMembers;
        })
      );
  }
}