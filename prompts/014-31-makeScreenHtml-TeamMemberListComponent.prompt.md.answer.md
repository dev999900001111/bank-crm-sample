```
<div class="container">
  <h2 class="mat-h2">チームメンバーリスト</h2>
  <mat-form-field>
    <input matInput (keyup)="applyFilter($event.target.value)" placeholder="名前またはメールアドレスで検索">
  </mat-form-field>
  <table mat-table [dataSource]="teamMembers" class="mat-elevation-z8">
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>名前</th>
      <td mat-cell *matCellDef="let member">{{member.firstName}} {{member.lastName}}</td>
    </ng-container>
    <ng-container matColumnDef="email">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>メールアドレス</th>
      <td mat-cell *matCellDef="let member">{{member.email}}</td>
    </ng-container>
    <ng-container matColumnDef="role">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>役割</th>
      <td mat-cell *matCellDef="let member">{{member.role}}</td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>
</div>
```