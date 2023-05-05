// src/app/dialogs/customer-details-dialog.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer, Sale, SalesData } from '../../models';
import { CustomerService, PerformanceService, SalesService } from '../../services';

@Component({
    selector: 'app-customer-details-dialog',
    templateUrl: './customer-details-dialog.component.html',
    styleUrls: ['./customer-details-dialog.component.scss']
})
export class CustomerDetailsDialogComponent implements OnInit {
    customer: Customer = {} as Customer;
    sales: Sale[] = [];
    salesData: SalesData[] = [];

    constructor(
        private customerService: CustomerService,
        private salesService: SalesService,
        private performanceService: PerformanceService,
        public dialogRef: MatDialogRef<CustomerDetailsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { customer: Customer }
    ) { }

    ngOnInit(): void {
        this.customer = this.data.customer;
        this.salesService.getSalesHistory().subscribe((sales) => {
            this.sales = sales.filter((sale) => sale.customerId === this.data.customer.id);
        });
        this.performanceService.getSalesPerformance().subscribe((salesData) => {
            this.salesData = salesData.filter((data) => data.id === this.data.customer.id);
        });
    }

    closeDialog(): void {
        this.dialogRef.close();
    }
}