```
<!-- sales-literature-list.component.html -->

<div class="container">
  <div class="toolbar">
    <button mat-raised-button color="primary" (click)="openUploadDialog()">資料を追加</button>
    <mat-form-field>
      <mat-label>ファイルタイプでフィルター</mat-label>
      <mat-select [(value)]="selectedFileType" (selectionChange)="applyFilter()">
        <mat-option value="">すべて</mat-option>
        <mat-option *ngFor="let fileType of fileTypes" [value]="fileType">{{ fileType }}</mat-option>
      </mat-select>
    </mat-form-field>
    <mat-form-field>
      <mat-label>ソート</mat-label>
      <mat-select [(value)]="selectedSort" (selectionChange)="applySort()">
        <mat-option value="title">タイトル</mat-option>
        <mat-option value="uploadDate">アップロード日</mat-option>
        <mat-option value="fileType">ファイルタイプ</mat-option>
      </mat-select>
    </mat-form-field>
  </div>
  <table mat-table [dataSource]="literatures" class="mat-elevation-z8">
    <ng-container matColumnDef="title">
      <th mat-header-cell *matHeaderCellDef>タイトル</th>
      <td mat-cell *matCellDef="let literature">{{ literature.title }}</td>
    </ng-container>
    <ng-container matColumnDef="description">
      <th mat-header-cell *matHeaderCellDef>説明</th>
      <td mat-cell *matCellDef="let literature">{{ literature.description }}</td>
    </ng-container>
    <ng-container matColumnDef="uploadDate">
      <th mat-header-cell *matHeaderCellDef>アップロード日</th>
      <td mat-cell *matCellDef="let literature">{{ literature.uploadDate | date }}</td>
    </ng-container>
    <ng-container matColumnDef="fileType">
      <th mat-header-cell *matHeaderCellDef>ファイルタイプ</th>
      <td mat-cell *matCellDef="let literature">{{ literature.fileType }}</td>
    </ng-container>
    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef></th>
      <td mat-cell *matCellDef="let literature">
        <button mat-icon-button (click)="openDetailsDialog(literature)">
          <mat-icon>info</mat-icon>
        </button>
        <a mat-icon-button [href]="literature.fileUrl" download>
          <mat-icon>cloud_download</mat-icon>
        </a>
      </td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>
</div>
```