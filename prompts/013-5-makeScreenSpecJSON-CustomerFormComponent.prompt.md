# Detailed Screen Design Document
## Screen name
CustomerFormComponent
## Description
This component is responsible for adding or editing customer information. It should display a form with input fields for customer first name, last name, email, phone, and address. The form should also have a submit button for saving the customer information.
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
The screen should have a simple layout with a form for adding or editing customer information. The form should have the following input fields:
- First name
- Last name
- Email
- Phone
- Address

The form should also have a submit button for saving the customer information.
## Screen behavior
When the component is loaded, it should check if there is a customer object passed as an input. If there is, the form should be pre-populated with the customer information. If not, the form should be empty.

When the user submits the form, the component should validate the input fields. If any of the fields are empty or invalid, an error message should be displayed. If all fields are valid, the component should call the CustomerService to save the customer information. If the save is successful, the component should emit an event with the updated customer information.
## Input Form
The input form should have the following fields:
- First name (required)
- Last name (required)
- Email (required, valid email format)
- Phone (required, valid phone number format)
- Address (required)

The form should also have a submit button for saving the customer information.
## Error messages
If any of the input fields are empty or invalid, an error message should be displayed next to the corresponding field. The error messages should be as follows:
- First name: "First name is required."
- Last name: "Last name is required."
- Email: "Please enter a valid email address."
- Phone: "Please enter a valid phone number."
- Address: "Address is required."
## Model classes used (excluding use from child components)
- Customer
## Service classes and methods used (excluding calls from child components)
- CustomerService
  - createCustomer(customer: Customer): Observable<Customer>
  - updateCustomer(customer: Customer): Observable<Customer>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.