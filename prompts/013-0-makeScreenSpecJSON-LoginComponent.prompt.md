# Detailed Screen Design Document
## Screen name
LoginComponent
## Description
The LoginComponent is the first screen that the user sees when accessing the CRM system. It provides a simple login form with input fields for username and password, as well as a login button. If the user forgets their password, they can click on the "Forgot Password" link to open the ForgotPasswordDialog.
## Child Elements
### Angular element components
- ForgotPasswordDialog(@Input:{}, @Output:{})
### Angular dialog components
None
### HTML components
- mat-form-field
- mat-input
- button
## Screen layout
The LoginComponent is a simple form with two input fields and a button. The input fields are for the user to enter their username and password, and the button is for submitting the form and logging in. The form is centered on the screen with a title above it that reads "Login to CRM System". Below the login button, there is a "Forgot Password" link that opens the ForgotPasswordDialog.
## Screen behavior
When the user enters their username and password and clicks the login button, the LoginComponent calls the AuthService's login method to authenticate the user. If the authentication is successful, the user is redirected to the DashboardComponent. If the authentication fails, an error message is displayed below the login button.
## Input Form
- Username (required)
- Password (required)
## Error messages
- "Please enter your username."
- "Please enter your password."
- "Invalid username or password."
## Model classes used (excluding use from child components)
- User
## Service classes and methods used (excluding calls from child components)
- AuthService: login(username: string, password: string): Observable<User>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.