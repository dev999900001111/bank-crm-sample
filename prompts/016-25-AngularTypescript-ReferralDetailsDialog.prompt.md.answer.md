```typescript
// src/app/dialogs/referral-details-dialog.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Referral } from '../../models';
import { ReferenceService } from '../../services';

@Component({
    selector: 'app-referral-details-dialog',
    templateUrl: './referral-details-dialog.component.html',
    styleUrls: ['./referral-details-dialog.component.scss']
})
export class ReferralDetailsDialogComponent implements OnInit {
    referral: Referral;

    constructor(
        private referenceService: ReferenceService,
        private dialogRef: MatDialogRef<ReferralDetailsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { referralId: number }
    ) {}

    ngOnInit(): void {
        this.referenceService.getReferralDetails(this.data.referralId).subscribe(
            (referral: Referral) => {
                this.referral = referral;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    closeDialog(): void {
        this.dialogRef.close();
    }
}
```