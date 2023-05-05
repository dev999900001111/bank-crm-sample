```
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <mat-card>
        <mat-card-header>
          <mat-card-title>タスク一覧</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-table [dataSource]="tasks" class="mat-elevation-z8">
            <ng-container matColumnDef="title">
              <mat-header-cell *matHeaderCellDef>タイトル</mat-header-cell>
              <mat-cell *matCellDef="let task">{{ task.title }}</mat-cell>
            </ng-container>
            <ng-container matColumnDef="description">
              <mat-header-cell *matHeaderCellDef>説明</mat-header-cell>
              <mat-cell *matCellDef="let task">{{ task.description }}</mat-cell>
            </ng-container>
            <ng-container matColumnDef="startDate">
              <mat-header-cell *matHeaderCellDef>開始日</mat-header-cell>
              <mat-cell *matCellDef="let task">{{ task.startDate | date: 'yyyy/MM/dd' }}</mat-cell>
            </ng-container>
            <ng-container matColumnDef="endDate">
              <mat-header-cell *matHeaderCellDef>終了日</mat-header-cell>
              <mat-cell *matCellDef="let task">{{ task.endDate | date: 'yyyy/MM/dd' }}</mat-cell>
            </ng-container>
            <ng-container matColumnDef="status">
              <mat-header-cell *matHeaderCellDef>ステータス</mat-header-cell>
              <mat-cell *matCellDef="let task">{{ task.status }}</mat-cell>
            </ng-container>
            <ng-container matColumnDef="actions">
              <mat-header-cell *matHeaderCellDef>アクション</mat-header-cell>
              <mat-cell *matCellDef="let task">
                <button mat-icon-button (click)="openTaskDetailsDialog(task)">
                  <mat-icon>visibility</mat-icon>
                </button>
                <button mat-icon-button (click)="editTask(task)">
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
        <mat-card-header>
          <mat-card-title>タスクフォーム</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <app-task-form [task]="selectedTask" (taskChange)="onTaskChange($event)"></app-task-form>
        </mat-card-content>
      </mat-card>
    </div>
  </div>
</div>

<ng-template #taskDetailsDialogTemplate let-data>
  <h2 mat-dialog-title>{{ data.task.title }}</h2>
  <mat-dialog-content>
    <p>{{ data.task.description }}</p>
    <p>開始日: {{ data.task.startDate | date: 'yyyy/MM/dd' }}</p>
    <p>終了日: {{ data.task.endDate | date: 'yyyy/MM/dd' }}</p>
    <p>ステータス: {{ data.task.status }}</p>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button (click)="closeDialog()">閉じる</button>
  </mat-dialog-actions>
</ng-template>
```