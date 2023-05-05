# html
```html
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <mat-card>
        <mat-card-title>紹介情報</mat-card-title>
        <mat-card-content>
          <mat-table [dataSource]="referrals" class="mat-elevation-z8">
            <ng-container matColumnDef="firstName">
              <mat-header-cell *matHeaderCellDef>名</mat-header-cell>
              <mat-cell *matCellDef="let referral">{{ referral.firstName }}</mat-cell>
            </ng-container>
            <ng-container matColumnDef="lastName">
              <mat-header-cell *matHeaderCellDef>姓</mat-header-cell>
              <mat-cell *matCellDef="let referral">{{ referral.lastName }}</mat-cell>
            </ng-container>
            <ng-container matColumnDef="email">
              <mat-header-cell *matHeaderCellDef>メールアドレス</mat-header-cell>
              <mat-cell *matCellDef="let referral">{{ referral.email }}</mat-cell>
            </ng-container>
            <ng-container matColumnDef="phone">
              <mat-header-cell *matHeaderCellDef>電話番号</mat-header-cell>
              <mat-cell *matCellDef="let referral">{{ referral.phone }}</mat-cell>
            </ng-container>
            <ng-container matColumnDef="referralDate">
              <mat-header-cell *matHeaderCellDef>紹介日</mat-header-cell>
              <mat-cell *matCellDef="let referral">{{ referral.referralDate | date }}</mat-cell>
            </ng-container>
            <ng-container matColumnDef="status">
              <mat-header-cell *matHeaderCellDef>ステータス</mat-header-cell>
              <mat-cell *matCellDef="let referral">{{ referral.status }}</mat-cell>
            </ng-container>
            <ng-container matColumnDef="actions">
              <mat-header-cell *matHeaderCellDef>アクション</mat-header-cell>
              <mat-cell *matCellDef="let referral">
                <button mat-icon-button (click)="openDetailsDialog(referral)">
                  <mat-icon>info</mat-icon>
                </button>
                <button mat-icon-button (click)="editReferral(referral)">
                  <mat-icon>edit</mat-icon>
                </button>
              </mat-cell>
            </ng-container>
            <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
            <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
          </mat-table>
        </mat-card-content>
      </mat-card>
    </div>
    <div class="col-md-6">
      <mat-card>
        <mat-card-title>{{ formTitle }}</mat-card-title>
        <mat-card-content>
          <app-referral-form [referral]="selectedReferral" (referralChange)="onReferralChange($event)"></app-referral-form>
        </mat-card-content>
      </mat-card>
    </div>
  </div>
</div>

<ng-template #detailsDialog let-referral>
  <h2 mat-dialog-title>紹介情報の詳細</h2>
  <mat-dialog-content>
    <p>名: {{ referral.firstName }}</p>
    <p>姓: {{ referral.lastName }}</p>
    <p>メールアドレス: {{ referral.email }}</p>
    <p>電話番号: {{ referral.phone }}</p>
    <p>紹介日: {{ referral.referralDate | date }}</p>
    <p>ステータス: {{ referral.status }}</p>
    <p>備考: {{ referral.notes }}</p>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button (click)="closeDialog()">閉じる</button>
  </mat-dialog-actions>
</ng-template>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.
