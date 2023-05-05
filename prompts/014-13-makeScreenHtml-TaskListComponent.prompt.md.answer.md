```html
<div class="container">
  <h2 class="mat-h2">タスクリスト</h2>
  <mat-form-field>
    <input matInput type="text" placeholder="タイトルまたは説明で検索">
  </mat-form-field>
  <button mat-raised-button color="primary" class="add-task-button">タスクを追加</button>
  <table mat-table [dataSource]="tasks" class="mat-elevation-z8">
    <ng-container matColumnDef="title">
      <th mat-header-cell *matHeaderCellDef>タイトル</th>
      <td mat-cell *matCellDef="let task">{{ task.title }}</td>
    </ng-container>
    <ng-container matColumnDef="description">
      <th mat-header-cell *matHeaderCellDef>説明</th>
      <td mat-cell *matCellDef="let task">{{ task.description }}</td>
    </ng-container>
    <ng-container matColumnDef="startDate">
      <th mat-header-cell *matHeaderCellDef>開始日</th>
      <td mat-cell *matCellDef="let task">{{ task.startDate | date: 'yyyy/MM/dd' }}</td>
    </ng-container>
    <ng-container matColumnDef="endDate">
      <th mat-header-cell *matHeaderCellDef>終了日</th>
      <td mat-cell *matCellDef="let task">{{ task.endDate | date: 'yyyy/MM/dd' }}</td>
    </ng-container>
    <ng-container matColumnDef="status">
      <th mat-header-cell *matHeaderCellDef>ステータス</th>
      <td mat-cell *matCellDef="let task">{{ task.status }}</td>
    </ng-container>
    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef>アクション</th>
      <td mat-cell *matCellDef="let task">
        <button mat-icon-button color="primary" class="edit-button">
          <mat-icon>edit</mat-icon>
        </button>
        <button mat-icon-button color="warn" class="delete-button">
          <mat-icon>delete</mat-icon>
        </button>
      </td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>
</div>
```