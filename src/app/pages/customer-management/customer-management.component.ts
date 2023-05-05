// src/app/pages/customer-management.component.ts
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models';
import { CustomerService } from '../../services';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDetailsDialogComponent } from '../../dialogs/customer-details-dialog/customer-details-dialog.component';

@Component({
    selector: 'app-customer-management',
    templateUrl: './customer-management.component.html',
    styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {
    customers: Customer[] = [];
    selectedCustomer: Customer = {} as Customer;

    constructor(private customerService: CustomerService, public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getCustomers();
    }

    getCustomers(): void {
        this.customerService.getCustomers().subscribe(customers => {
            this.customers = customers;
            this.selectedCustomer = customers[0] || {} as Customer;
        });
    }

    searchCustomers(query: string): void {
        this.customerService.searchCustomers(query).subscribe(customers => {
            this.customers = customers;
        });
    }

    segmentCustomers(segment: string): void {
        // this.customerService.getCustomersBySegment(segment).subscribe(customers => {
        //     this.customers = customers;
        // });
    }

    openCustomerDetailsDialog(customer: Customer): void {
        const dialogRef = this.dialog.open(CustomerDetailsDialogComponent, {
            width: '600px',
            data: { customer }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    onCustomerSelected(row: Customer): void {
        this.selectedCustomer = row;
    }

    onCustomerChange(customer: Customer): void {
        if (customer.id) {
            this.customerService.updateCustomer(customer).subscribe(() => {
                this.getCustomers();
            });
        } else {
            this.customerService.createCustomer(customer).subscribe(() => {
                this.getCustomers();
            });
        }
    }
}