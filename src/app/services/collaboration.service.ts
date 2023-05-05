import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { SharedInformation } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CollaborationService {

  private apiUrl = 'http://example.com/api';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getSharedInformation(): Observable<SharedInformation[]> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiUrl}/collaboration/shared-information`, { headers }).pipe(
      map((response: any) => {
        const sharedInformationList: SharedInformation[] = [];
        for (const info of response.sharedInformation) {
          sharedInformationList.push(new SharedInformation(
            info.id,
            info.userId,
            info.title,
            info.description,
            new Date(info.date),
            info.category
          ));
        }
        return sharedInformationList;
      })
    );
  }

  shareInformation(info: SharedInformation): Observable<SharedInformation> {
    const headers = this.getHeaders();
    return this.http.post(`${this.apiUrl}/collaboration/share-information`, info, { headers }).pipe(
      map((response: any) => {
        return new SharedInformation(
          response.info.id,
          response.info.userId,
          response.info.title,
          response.info.description,
          new Date(response.info.date),
          response.info.category
        );
      })
    );
  }
}