// src/app/pages/claims-handling.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Claim } from '../../models';
import { ClaimsService } from '../../services';
import { MatDialog } from '@angular/material/dialog';
import { ClaimDetailsDialogComponent } from '../../dialogs/claim-details-dialog/claim-details-dialog.component';
import { ClaimResponseComponent } from '../../parts/claim-response/claim-response.component';

@Component({
    selector: 'app-claims-handling',
    templateUrl: './claims-handling.component.html',
    styleUrls: ['./claims-handling.component.scss']
})
export class ClaimsHandlingComponent implements OnInit {
    claims: Claim[];
    selectedClaim: Claim;

    matColumnDef = 'title';
    matHeaderCellDef = 'title';
    matCellDef = 'title';
    matHeaderRowDef = 'title';
    matRowDef = 'title';

    @ViewChild('app-claim-response-dialog') claimResponseDialog: ElementRef;

    constructor(private claimsService: ClaimsService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.claimsService.getClaims().subscribe(
            (claims: Claim[]) => {
                this.claims = claims;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    showClaimDetails(claim: Claim): void {
        this.selectedClaim = claim;
    }

    showClaimResponseDialog(): void {
        const dialogRef = this.dialog.open(ClaimDetailsDialogComponent, {
            data: {
                claim: this.selectedClaim
            }
        });

        dialogRef.afterClosed().subscribe(
            (result: Claim) => {
                if (result) {
                    this.updateClaim(result);
                }
            }
        );
    }

    updateClaim(claim: Claim): void {
        const index = this.claims.findIndex(c => c.id === claim.id);
        if (index !== -1) {
            this.claims[index] = claim;
        }
    }
}