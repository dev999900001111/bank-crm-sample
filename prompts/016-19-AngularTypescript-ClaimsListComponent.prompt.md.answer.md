```typescript
// src/app/parts/claims-list.component.ts
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Claim, ClaimStatus } from '../../models';
import { ClaimsService } from '../../services';
import { MatDialog } from '@angular/material/dialog';
import { ClaimDetailsDialogComponent } from '../dialogs/claim-details-dialog.component';

@Component({
    selector: 'app-claims-list',
    templateUrl: './claims-list.component.html',
    styleUrls: ['./claims-list.component.scss']
})
export class ClaimsListComponent implements OnInit {

    @Input() claims: Claim[];
    @Output() claimsChange: EventEmitter<Claim[]> = new EventEmitter<Claim[]>();

    displayedColumns: string[] = ['title', 'customerName', 'date', 'status', 'actions'];

    constructor(private claimsService: ClaimsService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getClaims();
    }

    getClaims(): void {
        this.claimsService.getClaims().subscribe(
            (claims: Claim[]) => {
                this.claims = claims;
            },
            (error: any) => {
                console.error('Failed to retrieve claims. Please try again later.', error);
            }
        );
    }

    searchClaims(query: string): void {
        if (query) {
            this.claimsService.searchClaims(query).subscribe(
                (claims: Claim[]) => {
                    this.claims = claims;
                },
                (error: any) => {
                    console.error('Failed to retrieve claims. Please try again later.', error);
                }
            );
        } else {
            this.getClaims();
        }
    }

    sortClaims(sort: { active: string, direction: string }): void {
        const sortedClaims = this.claims.slice().sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'title': return compare(a.title, b.title, isAsc);
                case 'customerName': return compare(a.customer.firstName + ' ' + a.customer.lastName, b.customer.firstName + ' ' + b.customer.lastName, isAsc);
                case 'date': return compare(a.date, b.date, isAsc);
                case 'status': return compare(a.status, b.status, isAsc);
                default: return 0;
            }
        });
        this.claims = sortedClaims;
    }

    openClaimDetailsDialog(claim: Claim): void {
        const dialogRef = this.dialog.open(ClaimDetailsDialogComponent, {
            width: '600px',
            data: { claim }
        });

        dialogRef.afterClosed().subscribe((updatedClaim: Claim) => {
            if (updatedClaim) {
                const index = this.claims.findIndex(c => c.id === updatedClaim.id);
                if (index !== -1) {
                    this.claims[index] = updatedClaim;
                    this.claimsChange.emit(this.claims);
                }
            }
        });
    }

    respondToClaim(claim: Claim, response: string): void {
        this.claimsService.respondToClaim(claim.id, response).subscribe(
            (updatedClaim: Claim) => {
                const index = this.claims.findIndex(c => c.id === updatedClaim.id);
                if (index !== -1) {
                    this.claims[index] = updatedClaim;
                    this.claimsChange.emit(this.claims);
                }
            },
            (error: any) => {
                console.error('Failed to respond to claim. Please try again later.', error);
            }
        );
    }

    getClaimStatusLabel(status: ClaimStatus): string {
        switch (status) {
            case ClaimStatus.OPEN:
                return 'Open';
            case ClaimStatus.IN_PROGRESS:
                return 'In Progress';
            case ClaimStatus.RESOLVED:
                return 'Resolved';
            case ClaimStatus.CLOSED:
                return 'Closed';
            default:
                return '';
        }
    }

}

function compare(a: any, b: any, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
```