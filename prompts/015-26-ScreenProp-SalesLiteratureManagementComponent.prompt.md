# html
```html
<!-- Sales Literature Management Component -->
<div class="container">
  <h1 class="mat-h1">販売資料管理</h1>
  <button mat-raised-button color="primary" (click)="openUploadDialog()">新しい販売資料をアップロード</button>
  <br><br>
  <mat-card>
    <mat-table [dataSource]="literatures">
      <ng-container matColumnDef="title">
        <mat-header-cell *matHeaderCellDef>タイトル</mat-header-cell>
        <mat-cell *matCellDef="let literature">{{ literature.title }}</mat-cell>
      </ng-container>
      <ng-container matColumnDef="description">
        <mat-header-cell *matHeaderCellDef>説明</mat-header-cell>
        <mat-cell *matCellDef="let literature">{{ literature.description }}</mat-cell>
      </ng-container>
      <ng-container matColumnDef="uploadDate">
        <mat-header-cell *matHeaderCellDef>アップロード日</mat-header-cell>
        <mat-cell *matCellDef="let literature">{{ literature.uploadDate | date }}</mat-cell>
      </ng-container>
      <ng-container matColumnDef="fileType">
        <mat-header-cell *matHeaderCellDef>ファイルタイプ</mat-header-cell>
        <mat-cell *matCellDef="let literature">{{ literature.fileType }}</mat-cell>
      </ng-container>
      <ng-container matColumnDef="actions">
        <mat-header-cell *matHeaderCellDef>アクション</mat-header-cell>
        <mat-cell *matCellDef="let literature">
          <button mat-icon-button color="primary" (click)="openDetailsDialog(literature)">
            <mat-icon>info</mat-icon>
          </button>
          <button mat-icon-button color="accent" (click)="openUploadDialog(literature)">
            <mat-icon>edit</mat-icon>
          </button>
          <button mat-icon-button color="warn" (click)="deleteLiterature(literature)">
            <mat-icon>delete</mat-icon>
          </button>
        </mat-cell>
      </ng-container>
      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
    </mat-table>
  </mat-card>
</div>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.
