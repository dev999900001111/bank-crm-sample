# Detailed Screen Design Document
## Screen name
Literature Upload
## Description
The Literature Upload component allows salespeople to upload sales literature to the system for sharing with customers and other salespeople.
## Child Elements
### Angular element components
None
### Angular dialog components
None
### HTML components
- mat-form-field
- mat-input
- button
## Screen layout
The Literature Upload component consists of a form with input fields for the title, description, and file upload. The form is centered on the screen with a submit button at the bottom.
## Screen behavior
When the user clicks the submit button, the form data is validated and sent to the SalesLiteratureService to be uploaded to the system. If the upload is successful, a success message is displayed and the form is reset. If there is an error, an error message is displayed.
## Input Form
- Title (required): a text input field for the title of the sales literature
- Description (optional): a text input field for the description of the sales literature
- File upload (required): a file input field for uploading the sales literature file
- Submit button: a button to submit the form
## Error messages
- "Title is required" is displayed if the user tries to submit the form without entering a title.
- "File is required" is displayed if the user tries to submit the form without uploading a file.
- "File type not supported" is displayed if the user tries to upload a file that is not a PDF, DOCX, XLSX, or PPTX.
- "An error occurred. Please try again later." is displayed if there is an error uploading the file to the system.
## Model classes used (excluding use from child components)
- SalesLiterature(id: number, title: string, description: string, uploadDate: Date, fileUrl: string, fileType: FileType)
## Service classes and methods used (excluding calls from child components)
- SalesLiteratureService: uploadLiterature(literature: SalesLiterature): Observable<SalesLiterature>