// src/app/pages/reference-management.component.ts
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Customer, Referral, ReferralStatus } from '../../models';
import { CustomerService, ReferenceService } from '../../services';
import { MatDialog } from '@angular/material/dialog';
import { ReferralDetailsDialogComponent } from '../../dialogs/referral-details-dialog/referral-details-dialog.component';

@Component({
    selector: 'app-reference-management',
    templateUrl: './reference-management.component.html',
    styleUrls: ['./reference-management.component.scss']
})
export class ReferenceManagementComponent implements OnInit {
    referrals: Referral[] = [];
    displayedColumns: string[] = ['lastName', 'firstName', 'email', 'phone', 'referralDate', 'status', 'actions'];
    formTitle: string = 'Add Referral';
    selectedReferral: Referral = new Referral(0, 0, new Date(), ReferralStatus.NEW, '');

    @ViewChild('detailsDialog') detailsDialog!: TemplateRef<any>;

    customerMap: { [id: number]: Customer } = {};

    constructor(private referenceService: ReferenceService, private customerService: CustomerService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.customerService.getCustomers().subscribe(customers => {
            this.customerMap = customers.reduce((map: { [id: number]: Customer }, customer: Customer) => {
                map[customer.id] = customer;
                return map;
            }, this.customerMap);
        });
        this.getReferrals();
    }

    getReferrals(): void {
        this.referenceService.getReferrals().subscribe(referrals => {
            this.referrals = referrals;
        });
    }

    openDetailsDialog(referral: Referral): void {
        const dialogRef = this.dialog.open(ReferralDetailsDialogComponent, {
            width: '600px',
            data: { referral }
        });
    }

    addReferral(): void {
        this.formTitle = 'Add Referral';
        this.selectedReferral = new Referral(0, 0, new Date(), ReferralStatus.NEW, '');
    }

    editReferral(referral: Referral): void {
        this.formTitle = 'Edit Referral';
        this.selectedReferral = Object.assign({}, referral);
    }

    saveReferral(): void {
        if (this.selectedReferral.id === 0) {
            this.referenceService.createReferral(this.selectedReferral).subscribe(referral => {
                this.referrals.push(referral);
            });
        } else {
            this.referenceService.updateReferral(this.selectedReferral).subscribe(referral => {
                const index = this.referrals.findIndex(r => r.id === referral.id);
                this.referrals[index] = referral;
            });
        }
    }
    closeDialog(): void {
        this.dialog.closeAll();
    }

    // TODO
    // deleteReferral(referral: Referral): void {
    //     this.referenceService.deleteReferral(referral.id).subscribe(() => {
    //         const index = this.referrals.findIndex(r => r.id === referral.id);
    //         this.referrals.splice(index, 1);
    //     });
    // }

}