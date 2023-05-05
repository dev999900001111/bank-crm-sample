```
<div class="task-form-container">
  <form class="task-form" #taskForm="ngForm" (ngSubmit)="onSubmit()">
    <h2 class="task-form-title">{{ task ? 'タスク編集' : 'タスク作成' }}</h2>
    <mat-form-field class="task-form-field">
      <input matInput type="text" name="title" placeholder="タスク名" [(ngModel)]="task.title" required>
      <mat-error *ngIf="taskForm.controls['title'].invalid">タスク名は必須です。</mat-error>
    </mat-form-field>
    <mat-form-field class="task-form-field">
      <textarea matInput name="description" placeholder="詳細" [(ngModel)]="task.description"></textarea>
    </mat-form-field>
    <mat-form-field class="task-form-field">
      <input matInput [matDatepicker]="startDatePicker" name="startDate" placeholder="開始日" [(ngModel)]="task.startDate" required>
      <mat-datepicker-toggle matSuffix [for]="startDatePicker"></mat-datepicker-toggle>
      <mat-datepicker #startDatePicker></mat-datepicker>
      <mat-error *ngIf="taskForm.controls['startDate'].invalid">開始日は必須です。</mat-error>
    </mat-form-field>
    <mat-form-field class="task-form-field">
      <input matInput [matDatepicker]="endDatePicker" name="endDate" placeholder="終了日" [(ngModel)]="task.endDate" required>
      <mat-datepicker-toggle matSuffix [for]="endDatePicker"></mat-datepicker-toggle>
      <mat-datepicker #endDatePicker></mat-datepicker>
      <mat-error *ngIf="taskForm.controls['endDate'].invalid">終了日は必須です。</mat-error>
      <mat-error *ngIf="taskForm.controls['endDate'].hasError('matDatepickerMax')">開始日より後の日付を選択してください。</mat-error>
    </mat-form-field>
    <mat-form-field class="task-form-field">
      <input matInput [matTimepicker]="reminderTimePicker" name="reminderTime" placeholder="リマインダー" [(ngModel)]="task.reminder.time">
      <mat-timepicker-toggle matSuffix [for]="reminderTimePicker"></mat-timepicker-toggle>
      <mat-timepicker #reminderTimePicker></mat-timepicker>
      <mat-error *ngIf="taskForm.controls['reminderTime'].hasError('matDatepickerMin')">開始日より後の時間を選択してください。</mat-error>
      <mat-error *ngIf="taskForm.controls['reminderTime'].hasError('matDatepickerMax')">終了日より前の時間を選択してください。</mat-error>
    </mat-form-field>
    <mat-form-field class="task-form-field">
      <mat-select name="status" placeholder="ステータス" [(ngModel)]="task.status" required>
        <mat-option value="NOT_STARTED">未着手</mat-option>
        <mat-option value="IN_PROGRESS">進行中</mat-option>
        <mat-option value="COMPLETED">完了</mat-option>
        <mat-option value="CANCELED">キャンセル</mat-option>
      </mat-select>
      <mat-error *ngIf="taskForm.controls['status'].invalid">ステータスは必須です。</mat-error>
    </mat-form-field>
    <div class="task-form-buttons">
      <button mat-raised-button color="primary" type="submit">保存</button>
      <button mat-raised-button color="warn" type="button" (click)="onCancel()">キャンセル</button>
    </div>
  </form>
</div>
```