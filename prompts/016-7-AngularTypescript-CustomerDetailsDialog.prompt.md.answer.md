```typescript
// src/app/dialogs/customer-details-dialog.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer, Sale, SalesData } from '../../models';
import { CustomerService, SalesService } from '../../services';

@Component({
    selector: 'app-customer-details-dialog',
    templateUrl: './customer-details-dialog.component.html',
    styleUrls: ['./customer-details-dialog.component.scss']
})
export class CustomerDetailsDialogComponent implements OnInit {
    customer: Customer;
    sales: Sale[];
    salesData: SalesData[];

    constructor(
        private customerService: CustomerService,
        private salesService: SalesService,
        public dialogRef: MatDialogRef<CustomerDetailsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { customerId: number }
    ) {}

    ngOnInit(): void {
        this.customerService.getCustomerDetails(this.data.customerId).subscribe((customer) => {
            this.customer = customer;
        });
        this.salesService.getSalesHistory().subscribe((sales) => {
            this.sales = sales.filter((sale) => sale.customerId === this.data.customerId);
        });
        this.salesService.getSalesPerformance().subscribe((salesData) => {
            this.salesData = salesData.filter((data) => data.id === this.data.customerId);
        });
    }

    closeDialog(): void {
        this.dialogRef.close();
    }
}
```