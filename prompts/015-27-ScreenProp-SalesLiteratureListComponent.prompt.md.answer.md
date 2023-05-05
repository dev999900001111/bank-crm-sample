Variables:
- selectedFileType: string - stores the selected file type for filtering
- selectedSort: string - stores the selected sort option
- fileTypes: string[] - an array of all available file types
- literatures: Literature[] - an array of Literature objects to be displayed in the table
- displayedColumns: string[] - an array of column names to be displayed in the table

Constants:
- COLUMN_TITLE: string - constant for the "title" column name
- COLUMN_DESCRIPTION: string - constant for the "description" column name
- COLUMN_UPLOAD_DATE: string - constant for the "uploadDate" column name
- COLUMN_FILE_TYPE: string - constant for the "fileType" column name

ViewChild:
- uploadDialog: MatDialog - reference to the upload dialog component
- detailsDialog: MatDialog - reference to the details dialog component

Functions:
- openUploadDialog(): void - opens the upload dialog component
- applyFilter(): void - applies the selected file type filter to the table
- applySort(): void - applies the selected sort option to the table
- openDetailsDialog(literature: Literature): void - opens the details dialog component for the selected Literature object.