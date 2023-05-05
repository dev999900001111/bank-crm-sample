```typescript
// src/app/dialogs/claim-details-dialog.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Claim, ClaimStatus } from '../../models';
import { ClaimsService } from '../../services';

@Component({
    selector: 'app-claim-details-dialog',
    templateUrl: './claim-details-dialog.component.html',
    styleUrls: ['./claim-details-dialog.component.scss']
})
export class ClaimDetailsDialogComponent implements OnInit {
    claim: Claim;
    response: string;
    status: ClaimStatus;

    constructor(
        private claimsService: ClaimsService,
        private dialogRef: MatDialogRef<ClaimDetailsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { claimId: number }
    ) {}

    ngOnInit(): void {
        this.claimsService.getClaimDetails(this.data.claimId).subscribe(
            (claim) => {
                this.claim = claim;
            },
            (error) => {
                console.error(error);
                // TODO: Display error message to user
            }
        );
    }

    onSubmit(): void {
        this.claimsService.respondToClaim(this.claim.id, this.response, this.status).subscribe(
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
```