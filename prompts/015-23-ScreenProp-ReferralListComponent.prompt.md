# html
```html
<div class="container">
  <h2 class="mat-h2">紹介リスト</h2>
  <mat-form-field>
    <input matInput (keyup)="applyFilter($event.target.value)" placeholder="顧客名またはステータスで検索">
  </mat-form-field>
  <table mat-table [dataSource]="referrals" class="mat-elevation-z8">
    <ng-container matColumnDef="referralDate">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>紹介日</th>
      <td mat-cell *matCellDef="let referral">{{ referral.referralDate | date }}</td>
    </ng-container>
    <ng-container matColumnDef="customerName">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>顧客名</th>
      <td mat-cell *matCellDef="let referral">{{ referral.customerName }}</td>
    </ng-container>
    <ng-container matColumnDef="status">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>ステータス</th>
      <td mat-cell *matCellDef="let referral">{{ referral.status }}</td>
    </ng-container>
    <ng-container matColumnDef="notes">
      <th mat-header-cell *matHeaderCellDef>備考</th>
      <td mat-cell *matCellDef="let referral">{{ referral.notes }}</td>
    </ng-container>
    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef></th>
      <td mat-cell *matCellDef="let referral">
        <button mat-icon-button (click)="openReferralDetailsDialog(referral)">
          <mat-icon>edit</mat-icon>
        </button>
      </td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>
</div>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.
