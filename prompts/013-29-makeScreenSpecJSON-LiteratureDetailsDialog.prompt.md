# Detailed Screen Design Document
## Screen name
Literature Details Dialog

## Description
The Literature Details Dialog displays the details of a selected sales literature item, including the title, description, upload date, file type, and file URL.

## Child Elements
### Angular element components
None
### Angular dialog components
None
### HTML components
- mat-card: to display the literature details
- mat-list: to display the literature details in a list format

## Screen layout
The Literature Details Dialog will be a centered dialog box with a width of 500px. The dialog will contain a mat-card with the literature details displayed in a mat-list.

## Screen behavior
The Literature Details Dialog will be opened when the user clicks on a sales literature item in the SalesLiteratureListComponent. The dialog will display the details of the selected sales literature item. The user can close the dialog by clicking the close button.

## Input Form
None

## Error messages
None

## Model classes used (excluding use from child components)
- SalesLiterature(id: number, title: string, description: string, uploadDate: Date, fileUrl: string, fileType: FileType)

## Service classes and methods used (excluding calls from child components)
- SalesLiteratureService: getLiteratureDetails(literatureId: number): Observable<SalesLiterature>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.