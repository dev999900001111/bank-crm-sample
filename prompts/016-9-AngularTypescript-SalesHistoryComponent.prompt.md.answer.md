```typescript
// src/app/parts/sales-history.component.ts
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Sale } from '../../models';
import { SalesService } from '../../services';
import { SaleDetailsDialogComponent } from '../dialogs/sale-details-dialog.component';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.component.html',
  styleUrls: ['./sales-history.component.scss']
})
export class SalesHistoryComponent implements OnInit {

  @Input() sales: Sale[];

  displayedColumns: string[] = ['customerName', 'transactionDate', 'product', 'transactionAmount'];
  dataSource: any[];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private salesService: SalesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.salesService.getSalesHistory().subscribe((sales: Sale[]) => {
      this.dataSource = sales;
    }, (error) => {
      console.error(error);
      // TODO: Display error message to user
    });
  }

  openDialog(sale: Sale): void {
    const dialogRef = this.dialog.open(SaleDetailsDialogComponent, {
      width: '500px',
      data: sale
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
```