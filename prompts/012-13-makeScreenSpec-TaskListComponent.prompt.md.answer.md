# Detailed Screen Design Document
## Screen name
Task List
## Description
The Task List screen displays a list of tasks and schedules for the logged-in user. The user can view the details of each task, edit or delete tasks, and add new tasks. The list can be sorted by task status, start date, and end date. The user can also search for tasks by title or description.
## Child Elements
### Angular element components
- TaskDetailsDialog(@Input:{task: Task}, @Output:{taskChange: EventEmitter<Task>})
### Angular dialog components
None
### HTML components
- mat-table
## Screen layout
The screen is divided into two sections: the task list and the search bar. The task list is displayed in a mat-table with columns for task title, description, start date, end date, and status. The search bar is located above the table and allows the user to search for tasks by title or description. The table also includes buttons for editing and deleting tasks, as well as a button for adding new tasks.
## Screen behavior
- The task list is populated with tasks retrieved from the TaskService.
- The user can sort the task list by clicking on the column headers.
- The user can search for tasks by entering a search query in the search bar.
- The user can edit or delete a task by clicking on the corresponding button in the table row.
- The user can add a new task by clicking on the "Add Task" button.
- When the user clicks on a task row, the TaskDetailsDialog is opened, displaying the details of the selected task.
## Input Form
The "Add Task" button opens a form in a dialog box for adding a new task. The form includes the following fields:
- Title (required)
- Description
- Start Date (required)
- End Date (required)
- Status (dropdown with options: Not Started, In Progress, Completed, Canceled)
## Error messages
- "Title is required" - displayed if the user tries to add a task without a title.
- "Start Date is required" - displayed if the user tries to add a task without a start date.
- "End Date is required" - displayed if the user tries to add a task without an end date.
- "End Date must be after Start Date" - displayed if the user tries to add a task with an end date that is before the start date.
## Model classes used (excluding use from child components)
- Task
## Service classes and methods used (excluding calls from child components)
- TaskService: getTasks(), createTask(task: Task), updateTask(task: Task), getTaskDetails(taskId: number)