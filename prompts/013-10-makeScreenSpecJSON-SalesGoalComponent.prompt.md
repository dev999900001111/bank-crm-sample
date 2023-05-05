# Detailed Screen Design Document
## Screen name
Sales Goal Component
## Description
The Sales Goal Component is responsible for displaying the sales goal of the logged-in user and allowing them to update it. The component displays the target amount, start and end dates, and progress towards the goal. The user can update the target amount and end date and save the changes.
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
The Sales Goal Component consists of a single card with a form for setting and updating the sales goal. The card has a title "Sales Goal" and contains the following form fields:
- Target Amount: a numeric input field for setting the target amount of sales
- End Date: a date input field for setting the end date of the sales goal
- Progress: a read-only field displaying the progress towards the sales goal as a percentage
- Save button: a button for saving the changes to the sales goal
## Screen behavior
When the Sales Goal Component is loaded, it calls the SalesService to retrieve the sales goal for the logged-in user. The component then displays the target amount, start and end dates, and progress towards the goal. The user can update the target amount and end date and save the changes. When the user clicks the Save button, the component calls the SalesService to update the sales goal and displays a success message.
## Input Form
The Sales Goal Component has a form for setting and updating the sales goal. The form contains the following fields:
- Target Amount: a numeric input field for setting the target amount of sales
- End Date: a date input field for setting the end date of the sales goal
## Error messages
If there is an error retrieving or updating the sales goal, the component displays an error message. The error message is displayed in a snackbar at the bottom of the screen. The error message disappears after a few seconds. 
## Model classes used (excluding use from child components)
- SalesGoal
## Service classes and methods used (excluding calls from child components)
- SalesService: getSalesGoal(), updateSalesGoal(salesGoal: SalesGoal): Observable<SalesGoal>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.