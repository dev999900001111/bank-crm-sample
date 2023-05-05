// src/app/pages/sales-literature-management.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SalesLiterature } from '../../models';
import { SalesLiteratureService } from '../../services';
import { LiteratureDetailsDialogComponent } from '../../dialogs/literature-details-dialog/literature-details-dialog.component';
import { LiteratureUploadComponent } from '../../parts/literature-upload/literature-upload.component';

@Component({
    selector: 'app-sales-literature-management',
    templateUrl: './sales-literature-management.component.html',
    styleUrls: ['./sales-literature-management.component.scss']
})
export class SalesLiteratureManagementComponent implements OnInit {
    literatures: SalesLiterature[] = [];
    displayedColumns: string[] = ['title', 'description', 'uploadDate', 'fileType', 'actions'];

    constructor(private salesLiteratureService: SalesLiteratureService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getSalesLiterature();
    }

    getSalesLiterature(): void {
        this.salesLiteratureService.getSalesLiterature().subscribe(literatures => {
            this.literatures = literatures;
        });
    }

    openUploadDialog(literature: SalesLiterature = null): void {
        const dialogRef = this.dialog.open(LiteratureUploadComponent, {
            width: '500px',
            data: { literature }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.salesLiteratureService.uploadLiterature(result).subscribe(literature => {
                    this.literatures.push(literature);
                });
            }
        });
    }

    openDetailsDialog(literature: SalesLiterature): void {
        const dialogRef = this.dialog.open(LiteratureDetailsDialogComponent, {
            width: '500px',
            data: { literature }
        });
    }

    deleteLiterature(literature: SalesLiterature): void {
        if (confirm('Are you sure you want to delete this sales literature?')) {
            // this.salesLiteratureService.deleteLiterature(literature.id).subscribe(() => {
            //     this.literatures = this.literatures.filter(l => l.id !== literature.id);
            // });
        }
    }
}