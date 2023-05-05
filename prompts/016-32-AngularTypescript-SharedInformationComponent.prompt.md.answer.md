```typescript
// src/app/parts/shared-information.component.ts
import { Component, Input } from '@angular/core';
import { SharedInformation, InfoCategory } from '../../models';
import { CollaborationService } from '../../services';
import { MatDialog } from '@angular/material/dialog';
import { SharedInformationDialogComponent } from '../dialogs/shared-information-dialog/shared-information-dialog.component';

@Component({
  selector: 'app-shared-information',
  templateUrl: './shared-information.component.html',
  styleUrls: ['./shared-information.component.scss']
})
export class SharedInformationComponent {

  displayedColumns: string[] = ['title', 'description', 'date', 'category'];
  sharedInfo: SharedInformation[];

  constructor(private collaborationService: CollaborationService, public dialog: MatDialog) {
    this.getSharedInformation();
  }

  getSharedInformation(): void {
    this.collaborationService.getSharedInformation().subscribe(sharedInfo => {
      this.sharedInfo = sharedInfo;
    });
  }

  openDialog(row: any): void {
    this.dialog.open(SharedInformationDialogComponent, {
      data: row
    });
  }

  getCategoryName(category: InfoCategory): string {
    switch (category) {
      case InfoCategory.SUCCESS_STORY:
        return '成功事例';
      case InfoCategory.KNOW_HOW:
        return 'ノウハウ';
      case InfoCategory.TIP:
        return 'コツ';
      default:
        return '';
    }
  }

}
```