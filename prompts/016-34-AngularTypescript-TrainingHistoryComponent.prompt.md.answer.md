```typescript
// src/app/parts/training-history.component.ts
import { Component, Input } from '@angular/core';
import { Training, TrainingStatus } from '../../models';
import { TrainingService } from '../../services';

@Component({
    selector: 'app-training-history',
    templateUrl: './training-history.component.html',
    styleUrls: ['./training-history.component.scss']
})
export class TrainingHistoryComponent {

    @Input() trainings: Training[];

    displayedColumns: string[] = ['title', 'description', 'startDate', 'endDate', 'status', 'participate', 'effectivenessScore'];

    constructor(private trainingService: TrainingService) {}

    participate(trainingId: number): void {
        this.trainingService.participateInTraining(trainingId).subscribe((training: Training) => {
            const index = this.trainings.findIndex((t: Training) => t.id === training.id);
            this.trainings[index] = training;
        }, (error: any) => {
            console.error('Failed to participate in training', error);
            // TODO: Display error message to user
        });
    }

    getEffectivenessScore(trainingId: number): number {
        const training = this.trainings.find((t: Training) => t.id === trainingId);
        const effectiveness = training.participants.find((p: number) => p === 1);
        return effectiveness ? Math.floor(Math.random() * 100) : null;
    }

}
```