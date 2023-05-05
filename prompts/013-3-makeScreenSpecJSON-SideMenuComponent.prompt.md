# Detailed Screen Design Document

## Screen name
Side Menu

## Description
The Side Menu component is a navigation menu that allows users to access different pages and functionalities of the CRM system. It is located on the left side of the screen and is always visible.

## Child Elements
### Angular element components
None

### Angular dialog components
None

### HTML components
- mat-nav-list: A list of navigation links that allow users to access different pages and functionalities of the CRM system.

## Screen layout
The Side Menu component is located on the left side of the screen and takes up the entire height of the screen. It is divided into two sections: the header and the navigation links.

The header section contains the logo of the CRM system and the name of the user who is currently logged in.

The navigation links section contains a list of links that allow users to access different pages and functionalities of the CRM system. The links are organized into different categories, such as Customer Management, Sales Management, Task Management, Performance Reporting, Claims Handling, Reference Management, Sales Literature Management, Team Collaboration, and Training Management.

## Screen behavior
The Side Menu component is always visible on the screen and does not change its behavior based on user actions.

## Input Form
None

## Error messages
None

## Model classes used (excluding use from child components)
- User

## Service classes and methods used (excluding calls from child components)
- AuthService: getUserProfile() - Used to get the user information to display in the header section of the Side Menu component.

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.