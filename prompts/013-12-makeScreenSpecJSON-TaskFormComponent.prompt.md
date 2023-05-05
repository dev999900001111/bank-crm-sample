# Detailed Screen Design Document
## Screen name
TaskFormComponent
## Description
TaskFormComponent is a form for adding or editing tasks. It allows users to input task title, description, start date, end date, and reminder time. Users can also select the task status from a dropdown menu.
## Child Elements
### Angular element components
None
### Angular dialog components
None
### HTML components
- mat-form-field
- mat-input
- mat-select
- mat-option
- mat-datepicker
- mat-timepicker
- button
## Screen layout
The TaskFormComponent is a single-column form with the following fields:
- Task title (required)
- Task description
- Start date (required)
- End date (required)
- Reminder time
- Task status (required)
- Save button
- Cancel button

The form fields are arranged vertically in the order listed above. The Save and Cancel buttons are aligned horizontally at the bottom of the form.
## Screen behavior
When the TaskFormComponent is opened, it displays a blank form with empty fields. If the component is opened for editing an existing task, the form fields are pre-populated with the task's current values.

The user must input a task title, start date, end date, and task status. The start date and end date fields are date pickers, and the reminder time field is a time picker. The task status field is a dropdown menu with the following options: Not Started, In Progress, Completed, and Canceled.

When the user clicks the Save button, the form data is validated. If any required fields are missing or invalid, an error message is displayed and the form is not submitted. If all fields are valid, the form data is submitted to the TaskService to create or update the task. The user is then redirected to the TaskListComponent.

When the user clicks the Cancel button, the form is closed and the user is redirected to the TaskListComponent without saving any changes.
## Input Form
The TaskFormComponent has the following input fields:
- task: Task (optional)
- taskChange: EventEmitter<Task>

If the task input is provided, the form is opened in edit mode and the task's current values are pre-populated in the form fields. If the task input is not provided, the form is opened in create mode and the form fields are empty.

When the user submits the form, the taskChange event is emitted with the new or updated task object as the event payload.
## Error messages
The following error messages are displayed if the form data is invalid:
- Task title is required.
- Start date is required.
- End date is required.
- Start date must be before end date.
- Reminder time must be after start date.
- Reminder time must be before end date.
- Task status is required.
## Model classes used (excluding use from child components)
- Task
## Service classes and methods used (excluding calls from child components)
- TaskService
  - createTask(task: Task): Observable<Task>
  - updateTask(task: Task): Observable<Task>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.