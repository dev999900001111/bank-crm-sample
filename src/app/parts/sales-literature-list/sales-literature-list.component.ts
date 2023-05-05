// src/app/parts/sales-literature-list.component.ts
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SalesLiterature } from '../../models';
import { SalesLiteratureService } from '../../services';
import { LiteratureDetailsDialogComponent } from '../../dialogs/literature-details-dialog/literature-details-dialog.component';
// import { UploadLiteratureDialogComponent } from '../../dialogs/upload-literature-dialog.component';

@Component({
    selector: 'app-sales-literature-list',
    templateUrl: './sales-literature-list.component.html',
    styleUrls: ['./sales-literature-list.component.scss']
})
export class SalesLiteratureListComponent implements OnInit {

    @Input() literatures: SalesLiterature[];

    selectedFileType: string;
    selectedSort: string;
    fileTypes: string[] = ['PDF', 'DOCX', 'XLSX', 'PPTX'];
    // literatures: SalesLiterature[];
    displayedColumns: string[] = ['title', 'description', 'uploadDate', 'fileType'];

    readonly COLUMN_TITLE = 'title';
    readonly COLUMN_DESCRIPTION = 'description';
    readonly COLUMN_UPLOAD_DATE = 'uploadDate';
    readonly COLUMN_FILE_TYPE = 'fileType';

    @ViewChild('uploadDialog') uploadDialog: MatDialog;
    @ViewChild('detailsDialog') detailsDialog: MatDialog;

    constructor(private salesLiteratureService: SalesLiteratureService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getSalesLiterature();
    }

    openUploadDialog(): void {
        // const dialogRef = this.dialog.open(UploadLiteratureDialogComponent, {
        //     width: '500px'
        // });

        // dialogRef.afterClosed().subscribe(result => {
        //     if (result) {
        //         this.getSalesLiterature();
        //     }
        // });
    }

    applyFilter(): void {
        if (this.selectedFileType) {
            this.literatures = this.literatures.filter(literature => literature.fileType === this.selectedFileType);
        } else {
            this.getSalesLiterature();
        }
    }

    applySort(): void {
        switch (this.selectedSort) {
            case this.COLUMN_TITLE:
                this.literatures.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case this.COLUMN_DESCRIPTION:
                this.literatures.sort((a, b) => a.description.localeCompare(b.description));
                break;
            case this.COLUMN_UPLOAD_DATE:
                this.literatures.sort((a, b) => a.uploadDate.getTime() - b.uploadDate.getTime());
                break;
            case this.COLUMN_FILE_TYPE:
                this.literatures.sort((a, b) => a.fileType.localeCompare(b.fileType));
                break;
            default:
                this.getSalesLiterature();
                break;
        }
    }

    openDetailsDialog(literature: SalesLiterature): void {
        const dialogRef = this.dialog.open(LiteratureDetailsDialogComponent, {
            width: '500px',
            data: literature
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getSalesLiterature();
            }
        });
    }

    private getSalesLiterature(): void {
        this.salesLiteratureService.getSalesLiterature().subscribe(literatures => {
            this.literatures = literatures;
        }, error => {
            console.error(error);
            // TODO: Display error message to user
        });
    }
}