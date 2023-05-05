# Detailed Screen Design Document
## Screen name
Sales Literature List
## Description
The Sales Literature List screen displays a list of all sales literature available in the system. The list can be sorted and filtered by various criteria. Each item in the list displays the title, description, upload date, and file type of the sales literature. The user can click on an item to view the details of the sales literature in a dialog box.
## Child Elements
### Angular element components
- LiteratureDetailsDialog(@Input: literature: SalesLiterature, @Output: literatureChange: EventEmitter<SalesLiterature>)
### Angular dialog components
None
### HTML components
- mat-table
## Screen layout
The Sales Literature List screen consists of a single mat-table component that displays a list of sales literature. The table has the following columns:
- Title
- Description
- Upload Date
- File Type

The table also has a toolbar with the following buttons:
- Add Literature: Opens a dialog box to upload new sales literature.
- Filter: Opens a dropdown menu to filter the list by file type.
- Sort: Opens a dropdown menu to sort the list by title, upload date, or file type.

Clicking on an item in the table opens a dialog box to display the details of the sales literature.
## Screen behavior
The Sales Literature List screen displays a list of all sales literature available in the system. The list can be sorted and filtered by various criteria. Each item in the list displays the title, description, upload date, and file type of the sales literature. The user can click on an item to view the details of the sales literature in a dialog box.

The user can add new sales literature by clicking on the "Add Literature" button in the toolbar. This opens a dialog box where the user can upload a new file and enter the title and description of the sales literature.

The user can filter the list by file type by clicking on the "Filter" button in the toolbar. This opens a dropdown menu where the user can select the file type to filter by.

The user can sort the list by title, upload date, or file type by clicking on the "Sort" button in the toolbar. This opens a dropdown menu where the user can select the sorting criteria.

Clicking on an item in the table opens a dialog box to display the details of the sales literature. The dialog box displays the title, description, upload date, file type, and a preview of the file. The user can also download the file from the dialog box.
## Input Form
The Sales Literature List screen does not have an input form.
## Error messages
If there is an error retrieving the list of sales literature, a message is displayed at the top of the screen indicating that there was an error and to try again later. If there is an error uploading new sales literature, a message is displayed in the dialog box indicating that there was an error and to try again later. If there is an error downloading a sales literature file, a message is displayed in the dialog box indicating that there was an error and to try again later.
## Model classes used (excluding use from child components)
- SalesLiterature(id: number, title: string, description: string, uploadDate: Date, fileUrl: string, fileType: FileType)
## Service classes and methods used (excluding calls from child components)
- SalesLiteratureService: uploadLiterature(literature: SalesLiterature): Observable<SalesLiterature>, getSalesLiterature(): Observable<SalesLiterature[]>, getLiteratureDetails(literatureId: number): Observable<SalesLiterature>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.