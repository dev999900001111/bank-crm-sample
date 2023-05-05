# Detailed Screen Design Document
## Screen name
Forgot Password Dialog

## Description
The Forgot Password Dialog is a pop-up dialog that allows users to reset their password if they have forgotten it. The dialog prompts the user to enter their email address and sends a password reset link to the email address provided.

## Child Elements
### Angular element components
None

### Angular dialog components
None

### HTML components
- mat-form-field
- mat-input
- button

## Screen layout
The Forgot Password Dialog is a simple pop-up dialog with a form for the user to enter their email address. The form contains a single input field for the email address and a submit button.

## Screen behavior
When the user clicks on the "Forgot Password" link on the login page, the Forgot Password Dialog pops up. The user enters their email address into the input field and clicks the submit button. If the email address is valid, the system sends a password reset link to the email address provided and displays a success message. If the email address is invalid, the system displays an error message.

## Input Form
The Forgot Password Dialog contains a single input field for the user to enter their email address.

## Error messages
If the user enters an invalid email address, the system displays an error message indicating that the email address is invalid.

## Model classes used (excluding use from child components)
None

## Service classes and methods used (excluding calls from child components)
- AuthService: forgotPassword(email: string): Observable<boolean>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.