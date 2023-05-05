# html
```html
<div class="sales-goal-card">
  <h2 class="sales-goal-title">販売目標</h2>
  <form class="sales-goal-form">
    <mat-form-field class="sales-goal-form-field">
      <mat-label>目標金額</mat-label>
      <input matInput type="number" [(ngModel)]="salesGoal.targetAmount" name="targetAmount" required>
    </mat-form-field>
    <mat-form-field class="sales-goal-form-field">
      <mat-label>終了日</mat-label>
      <input matInput type="date" [(ngModel)]="salesGoal.endDate" name="endDate" required>
    </mat-form-field>
    <mat-form-field class="sales-goal-form-field">
      <mat-label>進捗</mat-label>
      <input matInput type="text" [(ngModel)]="salesGoal.progress" name="progress" disabled>
    </mat-form-field>
    <button mat-raised-button color="primary" (click)="save()">保存</button>
  </form>
</div>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.
