```
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { SalesData, Kpi } from '../models/performance.model';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {
  private apiUrl = 'http://example.com/api';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getSalesPerformance(): Observable<SalesData[]> {
    const url = `${this.apiUrl}/performance/sales`;
    return this.http.get<{ salesData: any[] }>(url, { headers: this.getHeaders() }).pipe(
      map(res => res.salesData.map(data => new SalesData(data.id, data.userId, new Date(data.date), data.amount)))
    );
  }

  getKpis(): Observable<Kpi[]> {
    const url = `${this.apiUrl}/performance/kpis`;
    return this.http.get<{ kpis: any[] }>(url, { headers: this.getHeaders() }).pipe(
      map(res => res.kpis.map(kpi => new Kpi(kpi.id, kpi.name, kpi.value, kpi.target, kpi.unit)))
    );
  }
}
```