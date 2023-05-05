```typescript
// src/app/parts/claim-response.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Claim } from '../../models';
import { ClaimsService } from '../../services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-claim-response',
    templateUrl: './claim-response.component.html',
    styleUrls: ['./claim-response.component.scss']
})
export class ClaimResponseComponent implements OnInit {

    @Input() claim: Claim;
    @Output() claimChange: EventEmitter<Claim> = new EventEmitter<Claim>();

    responseMessage: string = '';
    formSubmitted: boolean = false;

    constructor(private claimsService: ClaimsService, private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        if (this.responseMessage.trim() === '') {
            this.snackBar.open('Please enter a response message', 'Close', { duration: 3000 });
            return;
        }

        this.formSubmitted = true;
        this.claimsService.respondToClaim(this.claim.id, this.responseMessage).subscribe(
            (updatedClaim: Claim) => {
                this.claim = updatedClaim;
                this.claimChange.emit(updatedClaim);
                this.snackBar.open('Response submitted successfully', 'Close', { duration: 3000 });
            },
            (error: any) => {
                this.snackBar.open('Error submitting response', 'Close', { duration: 3000 });
            }
        );
    }

    onCancel(): void {
        this.formSubmitted = false;
        this.responseMessage = '';
    }

}
```