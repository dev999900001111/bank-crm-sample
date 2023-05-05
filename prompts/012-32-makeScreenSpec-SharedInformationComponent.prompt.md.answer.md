# Detailed Screen Design Document
## Screen name
Shared Information

## Description
The Shared Information screen displays a list of shared information and success stories that have been posted by team members. It allows users to view the details of each shared information and success story.

## Child Elements
### Angular element components
None

### Angular dialog components
None

### HTML components
- mat-table

## Screen layout
The Shared Information screen consists of a single mat-table that displays a list of shared information and success stories. The table has the following columns:
- Title
- Description
- Date
- Category

## Screen behavior
- When the Shared Information screen is loaded, it calls the CollaborationService to retrieve a list of shared information and success stories.
- The retrieved data is displayed in the mat-table.
- Users can click on a row in the table to view the details of the shared information or success story.

## Input Form
None

## Error messages
None

## Model classes used (excluding use from child components)
- SharedInformation(id: number, userId: number, title: string, description: string, date: Date, category: InfoCategory)

## Service classes and methods used (excluding calls from child components)
- CollaborationService: getSharedInformation(): Observable<SharedInformation[]>