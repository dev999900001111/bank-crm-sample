Variables:
- title: string - holds the value of the title input field
- description: string - holds the value of the description input field
- file: File - holds the selected file
- fileTypeError: boolean - indicates if the selected file type is not supported
- successMessage: string - displays a success message if the upload is successful
- errorMessage: string - displays an error message if the upload fails

Constants:
- acceptedFileTypes: string[] - an array of accepted file types for the file input field
- COLUMN_NAMES: string[] - an array of column names for the mat-table

ViewChild:
- literatureForm: NgForm - references the form element in the template

Functions:
- onSubmit(): void - handles the form submission and triggers the file upload
- onFileSelected(event: Event): void - handles the file selection and checks if the file type is supported
- uploadFile(file: File): void - sends the file to the server for upload and handles the response.