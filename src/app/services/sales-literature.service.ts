import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { SalesLiterature } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SalesLiteratureService {

  private apiUrl = '/api/sales-literature';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  uploadLiterature(literature: SalesLiterature): Observable<SalesLiterature> {
    return this.http.post<{ literature: SalesLiterature }>(`${this.apiUrl}/upload`, literature, { headers: this.getHeaders() })
      .pipe(
        map(res => {
          const uploadedLiterature = res.literature;
          uploadedLiterature.uploadDate = new Date(uploadedLiterature.uploadDate);
          return uploadedLiterature;
        })
      );
  }

  getSalesLiterature(): Observable<SalesLiterature[]> {
    return this.http.get<{ literature: SalesLiterature[] }>(this.apiUrl, { headers: this.getHeaders() })
      .pipe(
        map(res => {
          const literatureList = res.literature;
          literatureList.forEach(literature => {
            literature.uploadDate = new Date(literature.uploadDate);
          });
          return literatureList;
        })
      );
  }

  getLiteratureDetails(literatureId: number): Observable<SalesLiterature> {
    return this.http.get<{ literature: SalesLiterature }>(`${this.apiUrl}/${literatureId}`, { headers: this.getHeaders() })
      .pipe(
        map(res => {
          const literature = res.literature;
          literature.uploadDate = new Date(literature.uploadDate);
          return literature;
        })
      );
  }
}