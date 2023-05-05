# html
```html
<h1 mat-dialog-title>パスワードを忘れた場合</h1>
<div mat-dialog-content>
  <form>
    <mat-form-field>
      <mat-label>メールアドレス</mat-label>
      <input matInput type="email" placeholder="example@example.com" [(ngModel)]="email">
    </mat-form-field>
  </form>
</div>
<div mat-dialog-actions>
  <button mat-button (click)="onCancel()">キャンセル</button>
  <button mat-button color="primary" (click)="onSubmit()">送信</button>
</div>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.
