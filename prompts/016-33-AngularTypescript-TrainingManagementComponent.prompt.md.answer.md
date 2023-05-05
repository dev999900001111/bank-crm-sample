```typescript
// src/app/pages/training-management.component.ts
import { Component, OnInit } from '@angular/core';
import { Training, TrainingEffectiveness } from '../../models';
import { TrainingService } from '../../services';

@Component({
    selector: 'app-training-management',
    templateUrl: './training-management.component.html',
    styleUrls: ['./training-management.component.scss']
})
export class TrainingManagementComponent implements OnInit {
    trainings: Training[] = [];
    upcomingTrainings: Training[] = [];
    selectedTraining: Training;
    skillAcquisitionStatus: number;

    matColumnDef: string[] = ['title', 'description', 'startDate', 'endDate', 'status'];

    constructor(private trainingService: TrainingService) {
    }

    ngOnInit(): void {
        this.trainingService.getTrainingHistory().subscribe(trainings => {
            this.trainings = trainings;
        });

        this.trainingService.getTrainingEffectiveness().subscribe(eff => {
            this.skillAcquisitionStatus = eff[0].effectivenessScore;
        });

        this.trainingService.getUpcomingTrainings().subscribe(trainings => {
            this.upcomingTrainings = trainings;
            if (trainings.length > 0) {
                this.selectedTraining = trainings[0];
                this.onTrainingChange();
            }
        });
    }

    onTrainingClick(row: Training): void {
        this.selectedTraining = row;
        this.onTrainingChange();
    }

    onTrainingChange(): void {
        this.trainingService.getTrainingEffectiveness(this.selectedTraining.id).subscribe(eff => {
            this.skillAcquisitionStatus = eff.effectivenessScore;
        });
    }

    onParticipateClick(): void {
        this.trainingService.participateInTraining(this.selectedTraining.id).subscribe(training => {
            this.selectedTraining = training;
        });
    }
}
```

```html
<!-- src/app/pages/training-management.component.html -->
<div class="training-management-container">
    <div class="training-history">
        <mat-card>
            <mat-card-title>Training History</mat-card-title>
            <mat-table [dataSource]="trainings">
                <ng-container matColumnDef="title">
                    <mat-header-cell *matHeaderCellDef>Title</mat-header-cell>
                    <mat-cell *matCellDef="let row">{{row.title}}</mat-cell>
                </ng-container>
                <ng-container matColumnDef="description">
                    <mat-header-cell *matHeaderCellDef>Description</mat-header-cell>
                    <mat-cell *matCellDef="let row">{{row.description}}</mat-cell>
                </ng-container>
                <ng-container matColumnDef="startDate">
                    <mat-header-cell *matHeaderCellDef>Start Date</mat-header-cell>
                    <mat-cell *matCellDef="let row">{{row.startDate | date}}</mat-cell>
                </ng-container>
                <ng-container matColumnDef="endDate">
                    <mat-header-cell *matHeaderCellDef>End Date</mat-header-cell>
                    <mat-cell *matCellDef="let row">{{row.endDate | date}}</mat-cell>
                </ng-container>
                <ng-container matColumnDef="status">
                    <mat-header-cell *matHeaderCellDef>Status</mat-header-cell>
                    <mat-cell *matCellDef="let row">{{row.status}}</mat-cell>
                </ng-container>
                <mat-header-row *matHeaderRowDef="matColumnDef"></mat-header-row>
                <mat-row *matRowDef="let row; columns: matColumnDef;" (click)="onTrainingClick(row)"></mat-row>
            </mat-table>
            <div *ngIf="trainings.length === 0">No completed training sessions found.</div>
        </mat-card>
    </div>
    <div class="training-participation">
        <mat-card>
            <mat-card-title>Training Participation</mat-card-title>
            <mat-form-field>
                <mat-label>Training Session</mat-label>
                <mat-select [(ngModel)]="selectedTraining" (ngModelChange)="onTrainingChange()">
                    <mat-option *ngFor="let training of upcomingTrainings" [value]="training">{{training.title}}</mat-option>
                </mat-select>
            </mat-form-field>
            <mat-progress-bar mode="determinate" [value]="skillAcquisitionStatus"></mat-progress-bar>
            <button mat-raised-button color="primary" (click)="onParticipateClick()">Participate</button>
            <div *ngIf="upcomingTrainings.length === 0">No upcoming training sessions found.</div>
        </mat-card>
    </div>
</div>
```