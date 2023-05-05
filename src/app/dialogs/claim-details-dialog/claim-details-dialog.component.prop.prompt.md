# html
```html
<mat-dialog-content>
  <div class="dialog-container">
    <div class="left-container">
      <mat-list>
        <h3 mat-subheader>顧客名</h3>
        <mat-list-item>
          <div mat-line>{{claim.customerName}}</div>
        </mat-list-item>
        <h3 mat-subheader>請求状況</h3>
        <mat-list-item>
          <div mat-line>{{claim.status}}</div>
        </mat-list-item>
      </mat-list>
    </div>
    <div class="right-container">
      <mat-card>
        <mat-card-title>{{claim.title}}</mat-card-title>
        <mat-card-content>
          <p>{{claim.description}}</p>
          <p>日付: {{claim.date | date:'yyyy/MM/dd'}}</p>
          <p>状況: {{claim.status}}</p>
        </mat-card-content>
        <mat-card-actions>
          <form (ngSubmit)="onSubmit()" #responseForm="ngForm">
            <mat-form-field>
              <textarea matInput placeholder="返信" name="response" [(ngModel)]="response" required></textarea>
            </mat-form-field>
            <mat-form-field>
              <mat-label>状況</mat-label>
              <mat-select name="status" [(ngModel)]="status" required>
                <mat-option value="OPEN">オープン</mat-option>
                <mat-option value="IN_PROGRESS">進行中</mat-option>
                <mat-option value="RESOLVED">解決済み</mat-option>
                <mat-option value="CLOSED">クローズ</mat-option>
              </mat-select>
            </mat-form-field>
            <button mat-raised-button color="primary" type="submit" [disabled]="!responseForm.form.valid">更新</button>
          </form>
        </mat-card-actions>
      </mat-card>
    </div>
  </div>
</mat-dialog-content>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.
