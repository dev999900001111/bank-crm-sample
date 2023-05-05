# html
```html
<mat-sidenav-container class="sidenav-container">
  <mat-sidenav #drawer class="sidenav" fixedInViewport [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
    [mode]="(isHandset$ | async) ? 'over' : 'side'" [opened]="!(isHandset$ | async)">
    <mat-toolbar class="toolbar">
      <img src="assets/images/logo.png" alt="CRM Logo" class="logo">
      <span class="username">{{ user.firstName }} {{ user.lastName }}</span>
    </mat-toolbar>
    <mat-nav-list>
      <mat-list-item routerLink="/customer-management" routerLinkActive="active-link">
        <mat-icon>people</mat-icon>
        <span class="link-text">顧客管理</span>
      </mat-list-item>
      <mat-list-item routerLink="/sales-management" routerLinkActive="active-link">
        <mat-icon>attach_money</mat-icon>
        <span class="link-text">売上管理</span>
      </mat-list-item>
      <mat-list-item routerLink="/task-management" routerLinkActive="active-link">
        <mat-icon>assignment</mat-icon>
        <span class="link-text">タスク管理</span>
      </mat-list-item>
      <mat-list-item routerLink="/performance-reporting" routerLinkActive="active-link">
        <mat-icon>bar_chart</mat-icon>
        <span class="link-text">パフォーマンスレポート</span>
      </mat-list-item>
      <mat-list-item routerLink="/claims-handling" routerLinkActive="active-link">
        <mat-icon>gavel</mat-icon>
        <span class="link-text">クレーム処理</span>
      </mat-list-item>
      <mat-list-item routerLink="/reference-management" routerLinkActive="active-link">
        <mat-icon>library_books</mat-icon>
        <span class="link-text">参照管理</span>
      </mat-list-item>
      <mat-list-item routerLink="/sales-literature-management" routerLinkActive="active-link">
        <mat-icon>description</mat-icon>
        <span class="link-text">営業資料管理</span>
      </mat-list-item>
      <mat-list-item routerLink="/team-collaboration" routerLinkActive="active-link">
        <mat-icon>group</mat-icon>
        <span class="link-text">チームコラボレーション</span>
      </mat-list-item>
      <mat-list-item routerLink="/training-management" routerLinkActive="active-link">
        <mat-icon>school</mat-icon>
        <span class="link-text">トレーニング管理</span>
      </mat-list-item>
    </mat-nav-list>
  </mat-sidenav>
  <mat-sidenav-content>
    <ng-content></ng-content>
  </mat-sidenav-content>
</mat-sidenav-container>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.
