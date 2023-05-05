import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Claim } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  private apiUrl = 'http://example.com/api/claims';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getClaims(): Observable<Claim[]> {
    return this.http.get<{ claims: Claim[] }>(`${this.apiUrl}`, { headers: this.getHeaders() })
      .pipe(
        map(response => response.claims.map(claim => new Claim(
          claim.id,
          claim.customerId,
          claim.title,
          claim.description,
          new Date(claim.date),
          claim.status,
          claim.response
        )))
      );
  }

  respondToClaim(claimId: number, response: string): Observable<Claim> {
    return this.http.put<{ claim: Claim }>(`${this.apiUrl}/${claimId}/respond`, { response }, { headers: this.getHeaders() })
      .pipe(
        map(response => new Claim(
          response.claim.id,
          response.claim.customerId,
          response.claim.title,
          response.claim.description,
          new Date(response.claim.date),
          response.claim.status,
          response.claim.response
        ))
      );
  }

  getClaimDetails(claimId: number): Observable<Claim> {
    return this.http.get<{ claim: Claim }>(`${this.apiUrl}/${claimId}`, { headers: this.getHeaders() })
      .pipe(
        map(response => new Claim(
          response.claim.id,
          response.claim.customerId,
          response.claim.title,
          response.claim.description,
          new Date(response.claim.date),
          response.claim.status,
          response.claim.response
        ))
      );
  }
}