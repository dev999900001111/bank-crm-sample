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
        @Inject(MAT_DIALOG_DATA) public data: { literature: SalesLiterature }
    ) { }

    ngOnInit(): void {
        this.literature = this.data.literature;
    }
}
