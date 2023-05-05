// src/app/pages/sales-management.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, Sale, SalesGoal } from '../../models';
import { CustomerService, SalesService } from '../../services';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-sales-management',
    templateUrl: './sales-management.component.html',
    styleUrls: ['./sales-management.component.scss']
})
export class SalesManagementComponent implements OnInit {
    sales: Sale[] = [];
    salesGoal: SalesGoal = { id: -1, userId: -1, targetAmount: 0, startDate: new Date(), endDate: new Date(), progress: 0 };
    displayedColumns: string[] = ['customerName', 'amount', 'product', 'date'];
    @ViewChild('startDatePicker') startDatePicker!: MatDatepicker<Date>;
    @ViewChild('endDatePicker') endDatePicker!: MatDatepicker<Date>;

    customers: Customer[] = [];
    customerMap: { [id: number]: Customer } = {};

    constructor(private salesService: SalesService, private customerService: CustomerService, private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.customerService.getCustomers().subscribe(
            (customers: Customer[]) => {
                this.customers = customers;
                this.customerMap = customers.reduce((map: { [id: number]: Customer }, customer: Customer) => {
                    map[customer.id] = customer;
                    return map;
                }, this.customerMap);
            }
        );
        this.salesService.getSalesHistory().subscribe(
            (sales: Sale[]) => {
                this.sales = sales;
            },
            (error: any) => {
                this.snackBar.open('Error retrieving sales history', 'Close');
            }
        );
        this.salesService.getSalesGoal().subscribe(
            (salesGoal: SalesGoal) => {
                this.salesGoal = salesGoal;
            },
            (error: any) => {
                this.snackBar.open('Error retrieving sales goal', 'Close');
            }
        );
    }

    updateSalesGoal(): void {
        const daysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const daysInPeriod = (startDate: Date, endDate: Date) => {
            const days = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
            return days + 1;
        };
        const daysElapsed = daysInPeriod(this.salesGoal.startDate, new Date());
        const daysTotal = daysInPeriod(this.salesGoal.startDate, this.salesGoal.endDate);
        const progress = Math.min((this.salesGoal.progress * daysTotal + this.salesGoal.targetAmount * daysElapsed / daysInMonth(new Date())) / daysTotal, 1);
        const newSalesGoal: SalesGoal = {
            id: this.salesGoal.id,
            userId: this.salesGoal.userId,
            targetAmount: this.salesGoal.targetAmount,
            startDate: this.salesGoal.startDate,
            endDate: this.salesGoal.endDate,
            progress: progress
        };
        this.salesService.updateSalesGoal(newSalesGoal).subscribe(
            (salesGoal: SalesGoal) => {
                this.salesGoal = salesGoal;
                this.snackBar.open('Sales goal updated', 'Close');
            },
            (error: any) => {
                this.snackBar.open('Error updating sales goal', 'Close');
            }
        );
    }
}