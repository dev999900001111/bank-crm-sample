# Detailed Screen Design Document

## Screen name
Team Collaboration

## Description
The Team Collaboration screen allows users to view a list of team members and shared information. Users can also add new shared information.

## Child Elements
### Angular element components
- TeamMemberListComponent(@Input:{teamMembers: User[]}, @Output:{})
- SharedInformationComponent(@Input:{sharedInfo: SharedInformation[]}, @Output:{})

### Angular dialog components
None

### HTML components
- mat-card
- mat-table

## Screen layout
The screen is divided into two sections. The left section displays a list of team members in a mat-table. The right section displays a list of shared information in a mat-table. Both tables have a search bar at the top to filter the results.

## Screen behavior
- When the screen is loaded, the list of team members and shared information is retrieved from the CollaborationService.
- Users can search for team members or shared information by typing in the search bar.
- Users can click on a team member to view their profile.
- Users can click on a shared information to view its details.
- Users can click on the "Add" button to add new shared information.

## Input Form
The "Add" button opens a dialog box with the following input fields:
- Title (required)
- Description (required)
- Category (dropdown with options: Success Story, Know-How, Tip)

## Error messages
- "Title is required" if the user tries to submit the form without entering a title.
- "Description is required" if the user tries to submit the form without entering a description.

## Model classes used (excluding use from child components)
- User
- SharedInformation
- InfoCategory

## Service classes and methods used (excluding calls from child components)
- CollaborationService: getTeamMembers(): Observable<User[]>, getSharedInformation(): Observable<SharedInformation[]>, shareInformation(info: SharedInformation): Observable<SharedInformation>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.