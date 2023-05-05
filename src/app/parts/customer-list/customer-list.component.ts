// src/app/parts/customer-list.component.ts
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer, CustomerSegment } from '../../models';
import { CustomerService } from '../../services';
import { CustomerDetailsDialogComponent } from '../../dialogs/customer-details-dialog/customer-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

    @Input() customers: Customer[];

    // @ViewChild(MatSort) sort: MatSort;
    @ViewChild(CustomerDetailsDialogComponent) customerDetailsDialog: CustomerDetailsDialogComponent;

    searchQuery: string = '';
    filteredCustomers: Customer[] = [];
    displayedColumns: string[] = ['name', 'email', 'phone', 'address', 'registrationDate', 'segment', 'actions'];

    readonly title: string = '顧客一覧';
    readonly addButton: string = '顧客を追加';
    readonly exportButton: string = 'CSVエクスポート';
    readonly name: string = '名前';
    readonly email: string = 'メールアドレス';
    readonly phone: string = '電話番号';
    readonly address: string = '住所';
    readonly registrationDate: string = '登録日';
    readonly segment: string = 'セグメント';

    constructor(private customerService: CustomerService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.customerService.getCustomers().subscribe(customers => {
            this.customers = customers;
            this.filteredCustomers = customers;
        });
    }

    sort(columnName: string): void {
        const isAscending = this.sort['direction'] === 'asc';
        this.filteredCustomers.sort((a, b) => {
            if (a[columnName] < b[columnName]) {
                return isAscending ? -1 : 1;
            }
            if (a[columnName] > b[columnName]) {
                return isAscending ? 1 : -1;
            }
            return 0;
        });
    }

    addCustomer(): void {
        // TODO: Implement add customer dialog
    }

    exportList(): void {
        // TODO: Implement export to CSV functionality
    }

    viewDetails(customer: Customer): void {
        const dialogRef = this.dialog.open(CustomerDetailsDialogComponent, {
            width: '400px',
            data: customer
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
            }
        });
    }

    getSegmentLabel(segment: CustomerSegment): string {
        switch (segment) {
            case CustomerSegment.PREMIUM:
                return 'プレミアム';
            case CustomerSegment.STANDARD:
                return 'スタンダード';
            case CustomerSegment.BASIC:
                return 'ベーシック';
            default:
                return '';
        }
    }

    filterCustomers(): void {
        this.filteredCustomers = this.customers.filter(customer => {
            const query = this.searchQuery.toLowerCase();
            const name = `${customer.firstName} ${customer.lastName}`.toLowerCase();
            const email = customer.email.toLowerCase();
            const phone = customer.phone.toLowerCase();
            return name.includes(query) || email.includes(query) || phone.includes(query);
        });
    }
}