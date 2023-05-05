```
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Sale, SalesGoal } from '../models/sales.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private apiUrl = 'http://example.com/api';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getSalesHistory(): Observable<Sale[]> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiUrl}/sales/history`, { headers }).pipe(
      map((res: any) => {
        return res.sales.map((sale: any) => {
          return new Sale(
            sale.id,
            sale.customerId,
            sale.amount,
            new Date(sale.date),
            sale.product,
            sale.status
          );
        });
      })
    );
  }

  createSalesGoal(salesGoal: SalesGoal): Observable<SalesGoal> {
    const headers = this.getHeaders();
    return this.http.post(`${this.apiUrl}/sales/create-goal`, { salesGoal }, { headers }).pipe(
      map((res: any) => {
        return new SalesGoal(
          res.salesGoal.id,
          res.salesGoal.userId,
          res.salesGoal.targetAmount,
          new Date(res.salesGoal.startDate),
          new Date(res.salesGoal.endDate),
          res.salesGoal.progress
        );
      })
    );
  }

  updateSalesGoal(salesGoal: SalesGoal): Observable<SalesGoal> {
    const headers = this.getHeaders();
    return this.http.put(`${this.apiUrl}/sales/update-goal`, { salesGoal }, { headers }).pipe(
      map((res: any) => {
        return new SalesGoal(
          res.salesGoal.id,
          res.salesGoal.userId,
          res.salesGoal.targetAmount,
          new Date(res.salesGoal.startDate),
          new Date(res.salesGoal.endDate),
          res.salesGoal.progress
        );
      })
    );
  }

  getSalesGoal(): Observable<SalesGoal> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiUrl}/sales/goal`, { headers }).pipe(
      map((res: any) => {
        return new SalesGoal(
          res.salesGoal.id,
          res.salesGoal.userId,
          res.salesGoal.targetAmount,
          new Date(res.salesGoal.startDate),
          new Date(res.salesGoal.endDate),
          res.salesGoal.progress
        );
      })
    );
  }
}
```