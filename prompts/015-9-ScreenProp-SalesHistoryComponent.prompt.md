# html
```html
<!-- sales-history.component.html -->

<h2>売上履歴</h2>

<mat-table [dataSource]="sales" matSort>

  <ng-container matColumnDef="customerName">
    <mat-header-cell *matHeaderCellDef mat-sort-header>顧客名</mat-header-cell>
    <mat-cell *matCellDef="let sale">{{ sale.customerName }}</mat-cell>
  </ng-container>

  <ng-container matColumnDef="transactionDate">
    <mat-header-cell *matHeaderCellDef mat-sort-header>取引日</mat-header-cell>
    <mat-cell *matCellDef="let sale">{{ sale.transactionDate | date: 'yyyy/MM/dd' }}</mat-cell>
  </ng-container>

  <ng-container matColumnDef="product">
    <mat-header-cell *matHeaderCellDef mat-sort-header>商品</mat-header-cell>
    <mat-cell *matCellDef="let sale">{{ sale.product }}</mat-cell>
  </ng-container>

  <ng-container matColumnDef="transactionAmount">
    <mat-header-cell *matHeaderCellDef mat-sort-header>取引金額</mat-header-cell>
    <mat-cell *matCellDef="let sale">{{ sale.transactionAmount | currency: 'JPY' }}</mat-cell>
  </ng-container>

  <mat-header-row *matHeaderRowDef="['customerName', 'transactionDate', 'product', 'transactionAmount']"></mat-header-row>
  <mat-row *matRowDef="let sale; columns: ['customerName', 'transactionDate', 'product', 'transactionAmount']" (click)="openDialog(sale)"></mat-row>

</mat-table>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.
