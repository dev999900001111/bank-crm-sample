```typescript
// src/app/parts/literature-upload.component.ts
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SalesLiterature, FileType } from '../../models';
import { SalesLiteratureService } from '../../services';

@Component({
    selector: 'app-literature-upload',
    templateUrl: './literature-upload.component.html',
    styleUrls: ['./literature-upload.component.scss']
})
export class LiteratureUploadComponent implements OnInit {

    @Output() literatureChange: EventEmitter<SalesLiterature> = new EventEmitter<SalesLiterature>();

    title: string;
    description: string;
    file: File;
    fileTypeError: boolean = false;
    successMessage: string;
    errorMessage: string;

    acceptedFileTypes: string[] = [FileType.PDF, FileType.DOCX, FileType.XLSX, FileType.PPTX];
    COLUMN_NAMES: string[] = ['title', 'description', 'uploadDate', 'fileType'];

    @ViewChild('literatureForm') literatureForm: NgForm;

    constructor(private salesLiteratureService: SalesLiteratureService) {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        if (this.literatureForm.valid && this.file && !this.fileTypeError) {
            const literature: SalesLiterature = new SalesLiterature(
                null,
                this.title,
                this.description,
                new Date(),
                null,
                this.file.type
            );
            this.uploadFile(this.file, literature);
        }
    }

    onFileSelected(event: Event): void {
        const fileInput: HTMLInputElement = event.target as HTMLInputElement;
        if (fileInput.files && fileInput.files.length > 0) {
            this.file = fileInput.files[0];
            this.fileTypeError = !this.acceptedFileTypes.includes(this.file.type);
        }
    }

    uploadFile(file: File, literature: SalesLiterature): void {
        this.salesLiteratureService.uploadLiterature(literature).subscribe(
            (uploadedLiterature: SalesLiterature) => {
                const formData: FormData = new FormData();
                formData.append('file', file, file.name);
                this.salesLiteratureService.uploadFile(uploadedLiterature.id, formData).subscribe(
                    (response: any) => {
                        uploadedLiterature.fileUrl = response.fileUrl;
                        this.successMessage = 'File uploaded successfully.';
                        this.literatureChange.emit(uploadedLiterature);
                        this.literatureForm.resetForm();
                    },
                    (error: any) => {
                        this.errorMessage = 'An error occurred. Please try again later.';
                    }
                );
            },
            (error: any) => {
                this.errorMessage = 'An error occurred. Please try again later.';
            }
        );
    }

}
```