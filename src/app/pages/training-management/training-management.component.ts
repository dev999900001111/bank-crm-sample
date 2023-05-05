// src/app/pages/training-management.component.ts
import { Component, OnInit } from '@angular/core';
import { Training, TrainingEffectiveness, TrainingStatus } from '../../models';
import { TrainingService } from '../../services';

@Component({
    selector: 'app-training-management',
    templateUrl: './training-management.component.html',
    styleUrls: ['./training-management.component.scss']
})
export class TrainingManagementComponent implements OnInit {
    trainings: Training[] = [];
    upcomingTrainings: Training[] = [];
    selectedTraining: Training = {} as Training;
    skillAcquisitionStatus: number;

    matColumnDef: string[] = ['title', 'description', 'startDate', 'endDate', 'status'];

    constructor(private trainingService: TrainingService) {
    }

    ngOnInit(): void {

        // TODO 要検証：historyで全量が取れていて、ここで振り分けるという情報がここまで伝わっていない？
        this.trainingService.getTrainingHistory().subscribe(trainings => {
            this.trainings = [];
            this.upcomingTrainings = [];
            trainings.forEach(training => {
                if (training.status === TrainingStatus.COMPLETED) {
                    this.trainings.push(training);
                } else if (training.status === TrainingStatus.UPCOMING) {
                    this.upcomingTrainings.push(training);
                }
            });
        });

        this.trainingService.getTrainingEffectiveness().subscribe(eff => {
            this.skillAcquisitionStatus = eff[0].effectivenessScore;
        });
    }

    onTrainingClick(row: Training): void {
        this.selectedTraining = row;
        this.onTrainingChange();
    }

    onTrainingChange(): void {
        console.log(this.selectedTraining.id);
        this.trainingService.getTrainingEffectiveness().subscribe(eff => {
            const scoreObj = eff.find(e => e.trainingId === this.selectedTraining.id);
            if (scoreObj) {
                this.skillAcquisitionStatus = scoreObj.effectivenessScore;
            } else { }
        });
    }

    onParticipateClick(): void {
        this.trainingService.participateInTraining(this.selectedTraining.id).subscribe(training => {
            this.selectedTraining = training;
        });
    }
}
// //
// // <!-- src/app/pages/training-management.component.html -->
// <div class="training-management-container">
//     <div class="training-history">
//         <mat-card>
//             <mat-card-title>Training History</mat-card-title>
//             <mat-table [dataSource]="trainings">
//                 <ng-container matColumnDef="title">
//                     <mat-header-cell *matHeaderCellDef>Title</mat-header-cell>
//                     <mat-cell *matCellDef="let row">{{row.title}}</mat-cell>
//                 </ng-container>
//                 <ng-container matColumnDef="description">
//                     <mat-header-cell *matHeaderCellDef>Description</mat-header-cell>
//                     <mat-cell *matCellDef="let row">{{row.description}}</mat-cell>
//                 </ng-container>
//                 <ng-container matColumnDef="startDate">
//                     <mat-header-cell *matHeaderCellDef>Start Date</mat-header-cell>
//                     <mat-cell *matCellDef="let row">{{row.startDate | date}}</mat-cell>
//                 </ng-container>
//                 <ng-container matColumnDef="endDate">
//                     <mat-header-cell *matHeaderCellDef>End Date</mat-header-cell>
//                     <mat-cell *matCellDef="let row">{{row.endDate | date}}</mat-cell>
//                 </ng-container>
//                 <ng-container matColumnDef="status">
//                     <mat-header-cell *matHeaderCellDef>Status</mat-header-cell>
//                     <mat-cell *matCellDef="let row">{{row.status}}</mat-cell>
//                 </ng-container>
//                 <mat-header-row *matHeaderRowDef="matColumnDef"></mat-header-row>
//                 <mat-row *matRowDef="let row; columns: matColumnDef;" (click)="onTrainingClick(row)"></mat-row>
//             </mat-table>
//             <div *ngIf="trainings.length === 0">No completed training sessions found.</div>
//         </mat-card>
//     </div>
//     <div class="training-participation">
//         <mat-card>
//             <mat-card-title>Training Participation</mat-card-title>
//             <mat-form-field>
//                 <mat-label>Training Session</mat-label>
//                 <mat-select [(ngModel)]="selectedTraining" (ngModelChange)="onTrainingChange()">
//                     <mat-option *ngFor="let training of upcomingTrainings" [value]="training">{{training.title}}</mat-option>
//                 </mat-select>
//             </mat-form-field>
//             <mat-progress-bar mode="determinate" [value]="skillAcquisitionStatus"></mat-progress-bar>
//             <button mat-raised-button color="primary" (click)="onParticipateClick()">Participate</button>
//             <div *ngIf="upcomingTrainings.length === 0">No upcoming training sessions found.</div>
//         </mat-card>
//     </div>
// </div>