# html
```html
<div class="sales-performance-container">
  <div class="sales-performance-table">
    <div class="sales-performance-header">
      <h2>売上パフォーマンス</h2>
      <mat-form-field>
        <mat-label>期間</mat-label>
        <mat-select>
          <mat-option value="week">今週</mat-option>
          <mat-option value="month">今月</mat-option>
          <mat-option value="quarter">今四半期</mat-option>
          <mat-option value="year">今年</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    <table mat-table [dataSource]="salesData" class="mat-elevation-z8">
      <ng-container matColumnDef="date">
        <th mat-header-cell *matHeaderCellDef>日付</th>
        <td mat-cell *matCellDef="let element">{{ element.date | date: 'yyyy/MM/dd' }}</td>
      </ng-container>
      <ng-container matColumnDef="amount">
        <th mat-header-cell *matHeaderCellDef>売上</th>
        <td mat-cell *matCellDef="let element">{{ element.amount | currency: 'JPY' }}</td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="['date', 'amount']"></tr>
      <tr mat-row *matRowDef="let row; columns: ['date', 'amount']"></tr>
    </table>
  </div>
  <div class="sales-performance-chart">
    <div class="sales-performance-header">
      <h2>売上トレンド</h2>
    </div>
    <mat-card class="mat-elevation-z8">
      <mat-card-content>
        <canvas baseChart [datasets]="lineChartData" [labels]="lineChartLabels" [options]="lineChartOptions"
          [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType"></canvas>
      </mat-card-content>
    </mat-card>
  </div>
</div>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.
