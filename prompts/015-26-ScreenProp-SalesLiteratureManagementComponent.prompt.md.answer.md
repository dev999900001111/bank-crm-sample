Variables:
- literatures: any[] - an array of objects representing the sales literature data
- displayedColumns: string[] - an array of strings representing the column names to be displayed in the mat-table

Constants:
- mat-h1 - a string representing the CSS class for the header
- primary - a string representing the primary color for the upload button
- accent - a string representing the accent color for the edit button
- warn - a string representing the warning color for the delete button

ViewChild:
- none

Functions:
- openUploadDialog() - a function that opens a dialog for uploading new sales literature
- openDetailsDialog(literature: any) - a function that opens a dialog displaying details for a specific sales literature object
- deleteLiterature(literature: any) - a function that deletes a specific sales literature object from the literatures array.