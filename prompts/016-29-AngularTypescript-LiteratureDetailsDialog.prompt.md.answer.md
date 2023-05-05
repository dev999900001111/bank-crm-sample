```typescript
// src/app/dialogs/literature-details-dialog.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalesLiterature } from '../../models';
import { SalesLiteratureService } from '../../services';

@Component({
    selector: 'app-literature-details-dialog',
    templateUrl: './literature-details-dialog.component.html',
    styleUrls: ['./literature-details-dialog.component.scss']
})
export class LiteratureDetailsDialogComponent implements OnInit {
    literature: SalesLiterature;

    matDialogTitle = 'Sales Literature Details';
    matLine = 'mat-line';
    dateFormat = 'yyyy/MM/dd';
    fileTypeLabel = 'File Type';
    fileUrlLabel = 'File URL';

    constructor(
        private salesLiteratureService: SalesLiteratureService,
        @Inject(MAT_DIALOG_DATA) public data: { literatureId: number }
    ) {}

    ngOnInit(): void {
        this.salesLiteratureService
            .getLiteratureDetails(this.data.literatureId)
            .subscribe((literature) => (this.literature = literature));
    }
}
```

```html
<!-- src/app/dialogs/literature-details-dialog.component.html -->
<h2 mat-dialog-title>{{ matDialogTitle }}</h2>
<mat-dialog-content>
    <mat-card>
        <mat-list>
            <mat-list-item>
                <h3 matLine>Title:</h3>
                <p matLine>{{ literature?.title }}</p>
            </mat-list-item>
            <mat-list-item>
                <h3 matLine>Description:</h3>
                <p matLine>{{ literature?.description }}</p>
            </mat-list-item>
            <mat-list-item>
                <h3 matLine>Upload Date:</h3>
                <p matLine>{{ literature?.uploadDate | date: dateFormat }}</p>
            </mat-list-item>
            <mat-list-item>
                <h3 matLine>{{ fileTypeLabel }}:</h3>
                <p matLine>{{ literature?.fileType }}</p>
            </mat-list-item>
            <mat-list-item>
                <h3 matLine>{{ fileUrlLabel }}:</h3>
                <p matLine>{{ literature?.fileUrl }}</p>
            </mat-list-item>
        </mat-list>
    </mat-card>
</mat-dialog-content>
<mat-dialog-actions>
    <button mat-button mat-dialog-close>Close</button>
</mat-dialog-actions>
```