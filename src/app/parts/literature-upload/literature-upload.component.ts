import { Component, OnInit, Output, EventEmitter, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SalesLiterature, FileType } from '../../models';
import { SalesLiteratureService } from '../../services';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
    fileName: string = '';
    fileTypeError: boolean = false;
    successMessage: string;
    errorMessage: string;

    acceptedFileTypes: string[] = [FileType.PDF, FileType.DOCX, FileType.XLSX, FileType.PPTX];
    COLUMN_NAMES: string[] = ['title', 'description', 'uploadDate', 'fileType'];

    @ViewChild('literatureForm') literatureForm: NgForm;
    @ViewChild('fileInput') fileInput: any;

    constructor(private salesLiteratureService: SalesLiteratureService,
        public dialogRef: MatDialogRef<LiteratureUploadComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { literature: SalesLiterature }
    ) {
    }

    ngOnInit(): void {
        if (this.data.literature) {
            this.title = this.data.literature.title;
            this.description = this.data.literature.description;
        }
    }

    onSubmit(): void {
        if (this.literatureForm.valid && this.file && !this.fileTypeError) {
            const literature: SalesLiterature = new SalesLiterature(
                null,
                this.title,
                this.description,
                new Date(),
                null,
                this.file.type as FileType
            );
            this.uploadFile(this.file, literature);
        }
    }

    onFileSelected(event: Event): void {
        const fileInput: HTMLInputElement = event.target as HTMLInputElement;
        if (fileInput.files && fileInput.files.length > 0) {
            this.file = fileInput.files[0];
            this.fileName = this.file.name;
            this.fileTypeError = !this.acceptedFileTypes.includes(this.file.type);
        }
    }

    uploadFile(file: File, literature: SalesLiterature): void {
        this.salesLiteratureService.uploadLiterature(literature).subscribe(
            (uploadedLiterature: SalesLiterature) => {
                const formData: FormData = new FormData();
                formData.append('file', file, file.name);
                // this.salesLiteratureService.uploadLiterature(formData).subscribe(
                //     (response: any) => {
                //         uploadedLiterature.fileUrl = response.fileUrl;
                //         this.successMessage = 'File uploaded successfully.';
                //         this.literatureChange.emit(uploadedLiterature);
                //         this.literatureForm.resetForm();
                //         this.fileInput.nativeElement.value = '';
                //     },
                //     (error: any) => {
                //         this.errorMessage = 'An error occurred. Please try again later.';
                //     }
                // );
            },
            (error: any) => {
                this.errorMessage = 'An error occurred. Please try again later.';
            }
        );
    }

}