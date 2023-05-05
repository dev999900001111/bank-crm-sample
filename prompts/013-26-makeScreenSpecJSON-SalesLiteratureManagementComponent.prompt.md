# Detailed Screen Design Document
## Screen name
Sales Literature Management

## Description
The Sales Literature Management screen allows salespeople to manage sales literature, including uploading new literature, viewing existing literature, and editing literature details.

## Child Elements
### Angular element components
- SalesLiteratureListComponent(@Input:{literatures: SalesLiterature[]}, @Output:{})
- LiteratureUploadComponent(@Input:{}, @Output:{literatureChange: EventEmitter<SalesLiterature>})

### Angular dialog components
- LiteratureDetailsDialog(MAT_DIALOG_DATA:{literature: SalesLiterature})

### HTML components
- mat-card
- mat-table

## Screen layout
The Sales Literature Management screen consists of a header, a main content area, and a footer. The header contains the page title and a button for uploading new sales literature. The main content area displays a table of existing sales literature, including the title, description, upload date, and file type. Each row in the table also includes buttons for editing and deleting the corresponding sales literature. Clicking on a row in the table opens a dialog displaying the details of the selected sales literature.

## Screen behavior
- When the Sales Literature Management screen is loaded, the SalesLiteratureListComponent is called to retrieve the list of existing sales literature from the SalesLiteratureService.
- The SalesLiteratureListComponent displays the list of sales literature in a table.
- Clicking on the "Upload New Literature" button in the header opens the LiteratureUploadComponent in a dialog.
- The LiteratureUploadComponent allows the user to upload a new sales literature file and enter the title and description of the literature.
- When the user submits the form in the LiteratureUploadComponent, the new sales literature is added to the database via the SalesLiteratureService and the SalesLiteratureListComponent is updated to display the new literature.
- Clicking on the "Edit" button in a row of the sales literature table opens the LiteratureUploadComponent in a dialog with the details of the selected sales literature pre-populated in the form.
- When the user submits the form in the LiteratureUploadComponent, the edited sales literature is updated in the database via the SalesLiteratureService and the SalesLiteratureListComponent is updated to display the edited literature.
- Clicking on the "Delete" button in a row of the sales literature table prompts the user to confirm the deletion. If the user confirms, the corresponding sales literature is deleted from the database via the SalesLiteratureService and the SalesLiteratureListComponent is updated to remove the deleted literature.
- Clicking on a row in the sales literature table opens the LiteratureDetailsDialog, which displays the details of the selected sales literature.

## Input Form
The LiteratureUploadComponent contains a form for uploading new sales literature and editing existing sales literature. The form includes the following fields:
- Title (required)
- Description (optional)
- File upload (required)

## Error messages
- "Title is required" - displayed if the user attempts to submit the LiteratureUploadComponent form without entering a title.
- "File upload is required" - displayed if the user attempts to submit the LiteratureUploadComponent form without uploading a file.

## Model classes used (excluding use from child components)
- SalesLiterature(id: number, title: string, description: string, uploadDate: Date, fileUrl: string, fileType: FileType)

## Service classes and methods used (excluding calls from child components)
- SalesLiteratureService: uploadLiterature(literature: SalesLiterature): Observable<SalesLiterature>, getSalesLiterature(): Observable<SalesLiterature[]>, getLiteratureDetails(literatureId: number): Observable<SalesLiterature>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.