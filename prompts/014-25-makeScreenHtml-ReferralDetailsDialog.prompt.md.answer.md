```
<mat-card>
  <mat-card-title>紹介情報</mat-card-title>
  <mat-card-content>
    <mat-list>
      <mat-list-item>
        <h4 mat-line>顧客ID:</h4>
        <p mat-line>{{referral.customerId}}</p>
      </mat-list-item>
      <mat-list-item>
        <h4 mat-line>紹介日:</h4>
        <p mat-line>{{referral.referralDate | date: 'yyyy/MM/dd'}}</p>
      </mat-list-item>
      <mat-list-item>
        <h4 mat-line>ステータス:</h4>
        <p mat-line>{{referral.status}}</p>
      </mat-list-item>
      <mat-list-item>
        <h4 mat-line>備考:</h4>
        <p mat-line>{{referral.notes}}</p>
      </mat-list-item>
    </mat-list>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button (click)="dialogRef.close()">閉じる</button>
  </mat-card-actions>
</mat-card>
```