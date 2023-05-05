import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Training, TrainingEffectiveness } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private apiUrl = 'http://example.com/api';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getTrainingHistory(): Observable<Training[]> {
    return this.http.get<{ trainings: any[] }>(`${this.apiUrl}/training/history`, { headers: this.getHeaders() })
      .pipe(
        map(res => res.trainings.map(training => new Training(
          training.id,
          training.title,
          training.description,
          new Date(training.startDate),
          new Date(training.endDate),
          training.status,
          training.participants
        )))
      );
  }

  participateInTraining(trainingId: number): Observable<Training> {
    return this.http.post<{ training: any }>(`${this.apiUrl}/training/${trainingId}/participate`, null, { headers: this.getHeaders() })
      .pipe(
        map(res => new Training(
          res.training.id,
          res.training.title,
          res.training.description,
          new Date(res.training.startDate),
          new Date(res.training.endDate),
          res.training.status,
          res.training.participants
        ))
      );
  }

  getTrainingEffectiveness(): Observable<TrainingEffectiveness[]> {
    return this.http.get<{ trainingEffectiveness: any[] }>(`${this.apiUrl}/training/effectiveness`, { headers: this.getHeaders() })
      .pipe(
        map(res => res.trainingEffectiveness.map(effectiveness => new TrainingEffectiveness(
          effectiveness.id,
          effectiveness.trainingId,
          effectiveness.userId,
          effectiveness.effectivenessScore
        )))
      );
  }
}