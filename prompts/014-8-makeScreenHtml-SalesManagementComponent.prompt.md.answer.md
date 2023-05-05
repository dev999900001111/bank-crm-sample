```
<div class="sales-management-container">
  <div class="sales-history-container">
    <mat-card>
      <mat-table [dataSource]="sales">
        <ng-container matColumnDef="customerName">
          <mat-header-cell *matHeaderCellDef>Customer Name</mat-header-cell>
          <mat-cell *matCellDef="let sale">{{ sale.customerName }}</mat-cell>
        </ng-container>
        <ng-container matColumnDef="amount">
          <mat-header-cell *matHeaderCellDef>Amount</mat-header-cell>
          <mat-cell *matCellDef="let sale">{{ sale.amount }}</mat-cell>
        </ng-container>
        <ng-container matColumnDef="product">
          <mat-header-cell *matHeaderCellDef>Product</mat-header-cell>
          <mat-cell *matCellDef="let sale">{{ sale.product }}</mat-cell>
        </ng-container>
        <ng-container matColumnDef="date">
          <mat-header-cell *matHeaderCellDef>Date</mat-header-cell>
          <mat-cell *matCellDef="let sale">{{ sale.date | date }}</mat-cell>
        </ng-container>
        <mat-header-row *matHeaderRowDef="['customerName', 'amount', 'product', 'date']"></mat-header-row>
        <mat-row *matRowDef="let sale; columns: ['customerName', 'amount', 'product', 'date']"></mat-row>
      </mat-table>
    </mat-card>
  </div>
  <div class="sales-goal-container">
    <mat-card>
      <form>
        <mat-form-field>
          <input matInput type="number" placeholder="Target Amount" [(ngModel)]="salesGoal.targetAmount" name="targetAmount">
        </mat-form-field>
        <mat-form-field>
          <input matInput [matDatepicker]="startDatePicker" placeholder="Start Date" [(ngModel)]="salesGoal.startDate" name="startDate">
          <mat-datepicker-toggle matSuffix [for]="startDatePicker"></mat-datepicker-toggle>
          <mat-datepicker #startDatePicker></mat-datepicker>
        </mat-form-field>
        <mat-form-field>
          <input matInput [matDatepicker]="endDatePicker" placeholder="End Date" [(ngModel)]="salesGoal.endDate" name="endDate">
          <mat-datepicker-toggle matSuffix [for]="endDatePicker"></mat-datepicker-toggle>
          <mat-datepicker #endDatePicker></mat-datepicker>
        </mat-form-field>
        <button mat-raised-button color="primary" (click)="updateSalesGoal()">Set Goal</button>
      </form>
      <mat-progress-bar mode="determinate" [value]="salesGoal.progress"></mat-progress-bar>
    </mat-card>
  </div>
</div>
```