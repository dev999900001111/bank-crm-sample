// src/app/parts/referral-list.component.ts
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Referral } from '../../models';
import { ReferenceService } from '../../services';
import { ReferralDetailsDialogComponent } from '../../dialogs/referral-details-dialog/referral-details-dialog.component';

@Component({
    selector: 'app-referral-list',
    templateUrl: './referral-list.component.html',
    styleUrls: ['./referral-list.component.scss']
})
export class ReferralListComponent implements OnInit {

    @Input() referrals: Referral[];

    displayedColumns: string[] = ['referralDate', 'customerName', 'status', 'notes'];
    dataSource: MatTableDataSource<Referral>;

    @ViewChild(MatSort) sort: MatSort;

    constructor(private referenceService: ReferenceService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(this.referrals);
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string): void {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openReferralDetailsDialog(referral: Referral): void {
        const dialogRef: MatDialogRef<ReferralDetailsDialogComponent> = this.dialog.open(ReferralDetailsDialogComponent, {
            data: { referral }
        });

        dialogRef.afterClosed().subscribe((updatedReferral: Referral) => {
            if (updatedReferral) {
                this.referenceService.updateReferral(updatedReferral).subscribe(() => {
                    const index: number = this.referrals.findIndex((r: Referral) => r.id === updatedReferral.id);
                    this.referrals[index] = updatedReferral;
                    this.dataSource.data = this.referrals;
                });
            }
        });
    }
}