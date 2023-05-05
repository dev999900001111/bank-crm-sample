import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Customer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = '/api/customers';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    const headers = this.getHeaders();
    return this.http.post<{ customer: Customer }>(`${this.apiUrl}/create`, customer, { headers }).pipe(
      map(res => new Customer(res.customer.id, res.customer.firstName, res.customer.lastName, res.customer.email, res.customer.phone, res.customer.address, new Date(res.customer.registrationDate), res.customer.segment))
    );
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    const headers = this.getHeaders();
    return this.http.put<{ customer: Customer }>(`${this.apiUrl}/update`, customer, { headers }).pipe(
      map(res => new Customer(res.customer.id, res.customer.firstName, res.customer.lastName, res.customer.email, res.customer.phone, res.customer.address, new Date(res.customer.registrationDate), res.customer.segment))
    );
  }

  getCustomers(): Observable<Customer[]> {
    const headers = this.getHeaders();
    return this.http.get<{ customers: Customer[] }>(`${this.apiUrl}`, { headers }).pipe(
      map(res => res.customers.map(c => new Customer(c.id, c.firstName, c.lastName, c.email, c.phone, c.address, new Date(c.registrationDate), c.segment)))
    );
  }

  searchCustomers(query: string): Observable<Customer[]> {
    const headers = this.getHeaders();
    return this.http.get<{ customers: Customer[] }>(`${this.apiUrl}/search?query=${query}`, { headers }).pipe(
      map(res => res.customers.map(c => new Customer(c.id, c.firstName, c.lastName, c.email, c.phone, c.address, new Date(c.registrationDate), c.segment)))
    );
  }

  getCustomerDetails(customerId: number): Observable<Customer> {
    const headers = this.getHeaders();
    return this.http.get<{ customer: Customer }>(`${this.apiUrl}/${customerId}`, { headers }).pipe(
      map(res => new Customer(res.customer.id, res.customer.firstName, res.customer.lastName, res.customer.email, res.customer.phone, res.customer.address, new Date(res.customer.registrationDate), res.customer.segment))
    );
  }
}