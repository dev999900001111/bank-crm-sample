// src/app/dialogs/referral-details-dialog.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer, Referral } from '../../models';
import { CustomerService, ReferenceService } from '../../services';

@Component({
    selector: 'app-referral-details-dialog',
    templateUrl: './referral-details-dialog.component.html',
    styleUrls: ['./referral-details-dialog.component.scss']
})
export class ReferralDetailsDialogComponent implements OnInit {
    referral: Referral = {} as Referral;
    customer: Customer;

    constructor(
        private customerService: CustomerService,
        public dialogRef: MatDialogRef<ReferralDetailsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { referral: Referral }
    ) { }

    ngOnInit(): void {
        this.customerService.getCustomerDetails(this.data.referral.customerId).subscribe(
            (customer: Customer) => {
                this.customer = customer;
            },
            (error: any) => {
                console.log(error);
            }
        );
        this.referral = this.data.referral;
    }

    closeDialog(): void {
        this.dialogRef.close();
    }
}