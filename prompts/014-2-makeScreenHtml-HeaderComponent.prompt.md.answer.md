```html
<mat-toolbar color="primary">
  <button mat-icon-button routerLink="/dashboard">
    <mat-icon>home</mat-icon>
  </button>
  <span class="spacer"></span>
  <button mat-icon-button [matMenuTriggerFor]="userMenu">
    <mat-icon>account_circle</mat-icon>
  </button>
  <mat-menu #userMenu="matMenu">
    <button mat-menu-item routerLink="/profile">
      <mat-icon>person</mat-icon>
      <span>プロフィールを編集</span>
    </button>
    <button mat-menu-item (click)="openChangePasswordDialog()">
      <mat-icon>lock</mat-icon>
      <span>パスワードを変更</span>
    </button>
    <button mat-menu-item (click)="logout()">
      <mat-icon>exit_to_app</mat-icon>
      <span>ログアウト</span>
    </button>
  </mat-menu>
  <button mat-icon-button [matMenuTriggerFor]="notificationsMenu">
    <mat-icon>notifications</mat-icon>
  </button>
  <mat-menu #notificationsMenu="matMenu">
    <div class="notification-item">
      <div class="notification-title">新しいメッセージ</div>
      <div class="notification-message">山田様から新しいメッセージが届いています。</div>
    </div>
    <div class="notification-item">
      <div class="notification-title">新しいタスク</div>
      <div class="notification-message">新しいタスクが割り当てられました。</div>
    </div>
  </mat-menu>
</mat-toolbar>
```