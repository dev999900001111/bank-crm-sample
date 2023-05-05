# Detailed Screen Design Document
## Screen name
Team Member List
## Description
This screen displays a list of all team members in the organization. It provides basic information about each team member, such as their name, email address, and role. The list can be sorted and filtered based on various criteria.
## Child Elements
### Angular element components
None
### Angular dialog components
None
### HTML components
- mat-table
## Screen layout
The screen layout consists of a single mat-table component that displays a list of team members. The table has columns for the team member's name, email address, and role. The table can be sorted by any of these columns by clicking on the column header. The table also has a search bar that allows the user to filter the list of team members by name or email address.
## Screen behavior
When the screen is loaded, the list of team members is retrieved from the UserService. The list is then displayed in the mat-table component. The user can sort the list by clicking on any of the column headers. The user can also filter the list by entering a search term in the search bar. When the user clicks on a team member in the list, they are taken to the team member details screen.
## Input Form
None
## Error messages
If there is an error retrieving the list of team members from the UserService, an error message is displayed at the top of the screen. The error message informs the user that there was a problem retrieving the list of team members and provides instructions on how to try again.