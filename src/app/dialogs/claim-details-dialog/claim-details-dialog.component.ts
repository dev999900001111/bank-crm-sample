// src/app/dialogs/claim-details-dialog.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Claim, ClaimStatus, Customer } from '../../models';
import { ClaimsService, CustomerService } from '../../services';

@Component({
    selector: 'app-claim-details-dialog',
    templateUrl: './claim-details-dialog.component.html',
    styleUrls: ['./claim-details-dialog.component.scss']
})
export class ClaimDetailsDialogComponent implements OnInit {
    claim: Claim;
    response: string;
    status: ClaimStatus;
    customer: Customer = {} as Customer;

    constructor(
        private claimsService: ClaimsService,
        private customerService: CustomerService,
        private dialogRef: MatDialogRef<ClaimDetailsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { claim: Claim }
    ) { }

    ngOnInit(): void {
        this.claim = this.data.claim;
        this.customerService.getCustomerDetails(this.claim.customerId).subscribe(
            (customers) => {
                this.customer = customers;
            }
        );
    }

    onSubmit(): void {
        this.claimsService.respondToClaim(this.claim.id, this.response).subscribe(
            (claim) => {
                this.claim = claim;
                this.dialogRef.close();
            },
            (error) => {
                console.error(error);
                // TODO: Display error message to user
            }
        );
    }
}