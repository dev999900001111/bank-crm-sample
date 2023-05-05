# Detailed Screen Design Document
## Screen name
Referral Form
## Description
The Referral Form component allows bank salespeople to add or edit referral information for a customer. Referral information includes the customer's name, referral date, referral status, and notes.
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
The Referral Form component consists of a form with input fields for referral information. The form has the following fields:
- Customer Name (read-only)
- Referral Date (date picker)
- Referral Status (drop-down list)
- Notes (text area)

The form also has two buttons:
- Save: saves the referral information
- Cancel: cancels the referral information and closes the form

The form is centered on the screen with a width of 50% and a margin of 10% from the top of the screen.
## Screen behavior
When the Referral Form component is opened, it receives a referral object as an input. If the referral object is null, the form is in "add" mode, and the input fields are empty. If the referral object is not null, the form is in "edit" mode, and the input fields are pre-populated with the referral information.

When the user clicks the Save button, the form validates the input fields. If any of the fields are invalid, the form displays an error message next to the invalid field. If all fields are valid, the form emits the referral object with the updated information and closes the form.

When the user clicks the Cancel button, the form closes without emitting any data.
## Input Form
The Referral Form component has the following input fields:
- Referral Date: a date picker input field for the referral date
- Referral Status: a drop-down list input field for the referral status with the following options:
  - New
  - Contacted
  - Converted
  - Lost
- Notes: a text area input field for notes
## Error messages
The Referral Form component displays the following error messages:
- "Referral date is required" if the referral date field is empty
- "Invalid referral date" if the referral date is not a valid date
- "Referral status is required" if the referral status field is empty
- "Notes cannot be longer than 500 characters" if the notes field contains more than 500 characters
## Model classes used (excluding use from child components)
- Referral(id: number, customerId: number, referralDate: Date, status: ReferralStatus, notes: string)
## Service classes and methods used (excluding calls from child components)
- ReferenceService: createReferral(referral: Referral): Observable<Referral>, updateReferral(referral: Referral): Observable<Referral>, getReferralDetails(referralId: number): Observable<Referral>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.