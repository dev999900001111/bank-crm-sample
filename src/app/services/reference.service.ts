import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Referral } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  private apiUrl = 'http://example.com/api';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  createReferral(referral: Referral): Observable<Referral> {
    const url = `${this.apiUrl}/referrals/create`;
    const headers = this.getHeaders();
    return this.http.post(url, { referral }, { headers }).pipe(
      map((response: any) => {
        const referralData = response.referral;
        referralData.referralDate = new Date(referralData.referralDate);
        return referralData as Referral;
      })
    );
  }

  updateReferral(referral: Referral): Observable<Referral> {
    const url = `${this.apiUrl}/referrals/update`;
    const headers = this.getHeaders();
    return this.http.put(url, { referral }, { headers }).pipe(
      map((response: any) => {
        const referralData = response.referral;
        referralData.referralDate = new Date(referralData.referralDate);
        return referralData as Referral;
      })
    );
  }

  getReferrals(): Observable<Referral[]> {
    const url = `${this.apiUrl}/referrals`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers }).pipe(
      map((response: any) => {
        const referralsData = response.referrals;
        return referralsData.map((referralData: any) => {
          referralData.referralDate = new Date(referralData.referralDate);
          return referralData as Referral;
        });
      })
    );
  }

  getReferralDetails(referralId: number): Observable<Referral> {
    const url = `${this.apiUrl}/referrals/${referralId}`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers }).pipe(
      map((response: any) => {
        const referralData = response.referral;
        referralData.referralDate = new Date(referralData.referralDate);
        return referralData as Referral;
      })
    );
  }

}