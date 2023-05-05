```
<div class="referral-form-container">
  <h2 class="referral-form-title">紹介フォーム</h2>
  <form class="referral-form" #referralForm="ngForm">
    <mat-form-field class="referral-form-field">
      <input matInput placeholder="顧客名" disabled [(ngModel)]="referral.customerName" name="customerName">
    </mat-form-field>
    <mat-form-field class="referral-form-field">
      <input matInput [matDatepicker]="picker" placeholder="紹介日" [(ngModel)]="referral.referralDate" name="referralDate" required>
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
      <mat-error *ngIf="referralForm.controls['referralDate'].invalid && referralForm.controls['referralDate'].touched">
        紹介日は必須です。
      </mat-error>
    </mat-form-field>
    <mat-form-field class="referral-form-field">
      <mat-select placeholder="ステータス" [(ngModel)]="referral.status" name="status" required>
        <mat-option value="NEW">新規</mat-option>
        <mat-option value="CONTACTED">コンタクト済み</mat-option>
        <mat-option value="CONVERTED">コンバート済み</mat-option>
        <mat-option value="LOST">失注</mat-option>
      </mat-select>
      <mat-error *ngIf="referralForm.controls['status'].invalid && referralForm.controls['status'].touched">
        ステータスは必須です。
      </mat-error>
    </mat-form-field>
    <mat-form-field class="referral-form-field">
      <textarea matInput placeholder="備考" [(ngModel)]="referral.notes" name="notes" maxlength="500"></textarea>
      <mat-hint align="end">{{ referral.notes?.length || 0 }}/500</mat-hint>
      <mat-error *ngIf="referralForm.controls['notes'].invalid && referralForm.controls['notes'].touched">
        備考は500文字以内で入力してください。
      </mat-error>
    </mat-form-field>
    <div class="referral-form-buttons">
      <button mat-raised-button color="primary" (click)="saveReferral()" [disabled]="referralForm.invalid">保存</button>
      <button mat-raised-button color="warn" (click)="cancelReferral()">キャンセル</button>
    </div>
  </form>
</div>
```