```
<mat-card>
  <mat-card-title>{{ 'taskDetailsDialog.taskTitle' | translate }}: {{ task.title }}</mat-card-title>
  <mat-card-content>
    <p>{{ 'taskDetailsDialog.taskDescription' | translate }}: {{ task.description }}</p>
    <p>{{ 'taskDetailsDialog.startDate' | translate }}: {{ task.startDate | date:'shortDate' }}</p>
    <p>{{ 'taskDetailsDialog.endDate' | translate }}: {{ task.endDate | date:'shortDate' }}</p>
    <mat-chip-list>
      <mat-chip [ngClass]="{'mat-primary': task.status === 'COMPLETED', 'mat-warn': task.status === 'CANCELED', 'mat-accent': task.status === 'IN_PROGRESS', 'mat-basic': task.status === 'NOT_STARTED'}">{{ task.status }}</mat-chip>
    </mat-chip-list>
    <mat-list *ngIf="task.reminder">
      <h3 mat-subheader>{{ 'taskDetailsDialog.reminder' | translate }}</h3>
      <mat-list-item>
        <div mat-list-avatar>
          <mat-icon>alarm</mat-icon>
        </div>
        <div mat-line>{{ task.reminder.message }}</div>
        <div mat-line class="mat-card-subtitle">{{ task.reminder.time | date:'shortTime' }}</div>
      </mat-list-item>
    </mat-list>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button (click)="dialogRef.close()">{{ 'taskDetailsDialog.close' | translate }}</button>
  </mat-card-actions>
</mat-card>
```