```typescript
// src/app/parts/training-participation.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Training, TrainingStatus } from '../../models';
import { TrainingService } from '../../services';

@Component({
    selector: 'app-training-participation',
    templateUrl: './training-participation.component.html',
    styleUrls: ['./training-participation.component.scss']
})
export class TrainingParticipationComponent implements OnInit {

    @Input() training: Training;
    @Output() trainingChange: EventEmitter<Training> = new EventEmitter<Training>();

    progress: number = 0;

    constructor(private trainingService: TrainingService, private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.calculateProgress();
    }

    participate(): void {
        this.trainingService.participateInTraining(this.training.id).subscribe(
            (training: Training) => {
                this.training = training;
                this.trainingChange.emit(training);
                this.snackBar.open('参加しました。', '閉じる', { duration: 3000 });
            },
            (error: any) => {
                this.snackBar.open('エラーが発生しました。', '閉じる', { duration: 3000 });
            }
        );
    }

    calculateProgress(): void {
        if (this.training.status === TrainingStatus.COMPLETED) {
            this.progress = 100;
        } else if (this.training.status === TrainingStatus.UPCOMING) {
            this.progress = 0;
        } else {
            const totalParticipants = this.training.participants.length;
            const completedParticipants = this.training.participants.filter((participantId: number) => {
                // TODO: Implement logic to check if participant has completed related tasks
                return true;
            }).length;
            this.progress = Math.round((completedParticipants / totalParticipants) * 100);
        }
    }

}
```