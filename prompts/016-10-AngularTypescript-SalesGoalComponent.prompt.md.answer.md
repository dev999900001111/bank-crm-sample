```typescript
// src/app/parts/sales-goal.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SalesGoal } from '../../models';
import { SalesService } from '../../services';

@Component({
    selector: 'app-sales-goal',
    templateUrl: './sales-goal.component.html',
    styleUrls: ['./sales-goal.component.scss']
})
export class SalesGoalComponent implements OnInit {

    @Input() salesGoal: SalesGoal;
    @Output() salesGoalChange: EventEmitter<SalesGoal> = new EventEmitter<SalesGoal>();

    constructor(private salesService: SalesService, private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
    }

    save(): void {
        this.salesService.updateSalesGoal(this.salesGoal).subscribe(
            (updatedSalesGoal: SalesGoal) => {
                this.salesGoal = updatedSalesGoal;
                this.salesGoalChange.emit(updatedSalesGoal);
                this.snackBar.open('Sales goal updated successfully', 'Close', {
                    duration: 3000,
                });
            },
            (error: any) => {
                this.snackBar.open('Error updating sales goal', 'Close', {
                    duration: 3000,
                });
            }
        );
    }
}
```