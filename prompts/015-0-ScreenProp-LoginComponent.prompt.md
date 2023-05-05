# html
```html
<div class="login-container">
  <h1 class="login-title">CRMシステムにログイン</h1>
  <form class="login-form" #loginForm="ngForm" (ngSubmit)="onSubmit()">
    <mat-form-field appearance="fill" class="login-input">
      <mat-label>ユーザー名</mat-label>
      <input matInput type="text" name="username" [(ngModel)]="username" required>
      <mat-error *ngIf="loginForm.controls['username'].invalid && (loginForm.controls['username'].dirty || loginForm.controls['username'].touched)">
        ユーザー名を入力してください。
      </mat-error>
    </mat-form-field>
    <mat-form-field appearance="fill" class="login-input">
      <mat-label>パスワード</mat-label>
      <input matInput type="password" name="password" [(ngModel)]="password" required>
      <mat-error *ngIf="loginForm.controls['password'].invalid && (loginForm.controls['password'].dirty || loginForm.controls['password'].touched)">
        パスワードを入力してください。
      </mat-error>
    </mat-form-field>
    <button mat-raised-button color="primary" type="submit" class="login-button">ログイン</button>
  </form>
  <a class="forgot-password-link" (click)="openForgotPasswordDialog()">パスワードをお忘れですか？</a>
</div>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.
