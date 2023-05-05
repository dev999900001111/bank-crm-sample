# Detailed Screen Design Document
## Screen name
HeaderComponent
## Description
The HeaderComponent is a reusable component that displays the header of the application. It includes the logo, user profile, notifications, and logout button.
## Child Elements
### Angular element components
None
### Angular dialog components
None
### HTML components
- mat-toolbar
## Screen layout
The HeaderComponent is a fixed component that is displayed at the top of the screen. It includes the following elements:
- Logo: A clickable logo that redirects the user to the dashboard.
- User profile: A dropdown menu that displays the user's name and profile image. When clicked, it displays the following options:
  - Edit profile: Redirects the user to the user profile page.
  - Change password: Displays a dialog for changing the user's password.
  - Logout: Logs the user out of the application.
- Notifications: A clickable icon that displays a dropdown menu of the user's notifications when clicked.
## Screen behavior
The HeaderComponent is always displayed at the top of the screen, regardless of the current page or component. When the user clicks on the logo, they are redirected to the dashboard. When the user clicks on the user profile dropdown menu, they can access the options to edit their profile, change their password, or logout. When the user clicks on the notifications icon, they can view their notifications in a dropdown menu.
## Input Form
None
## Error messages
None
## Model classes used (excluding use from child components)
- User
## Service classes and methods used (excluding calls from child components)
- AuthService: getUserProfile()