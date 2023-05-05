```
<!-- shared-information.component.html -->

<h2 class="mat-h2">共有情報</h2>

<mat-table [dataSource]="sharedInfo" class="mat-elevation-z8">

  <!-- Title Column -->
  <ng-container matColumnDef="title">
    <mat-header-cell *matHeaderCellDef> タイトル </mat-header-cell>
    <mat-cell *matCellDef="let info"> {{info.title}} </mat-cell>
  </ng-container>

  <!-- Description Column -->
  <ng-container matColumnDef="description">
    <mat-header-cell *matHeaderCellDef> 説明 </mat-header-cell>
    <mat-cell *matCellDef="let info"> {{info.description}} </mat-cell>
  </ng-container>

  <!-- Date Column -->
  <ng-container matColumnDef="date">
    <mat-header-cell *matHeaderCellDef> 日付 </mat-header-cell>
    <mat-cell *matCellDef="let info"> {{info.date | date: 'yyyy/MM/dd'}} </mat-cell>
  </ng-container>

  <!-- Category Column -->
  <ng-container matColumnDef="category">
    <mat-header-cell *matHeaderCellDef> カテゴリー </mat-header-cell>
    <mat-cell *matCellDef="let info"> {{info.category}} </mat-cell>
  </ng-container>

  <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
  <mat-row *matRowDef="let row; columns: displayedColumns;" (click)="openDialog(row)"></mat-row>
</mat-table>
```