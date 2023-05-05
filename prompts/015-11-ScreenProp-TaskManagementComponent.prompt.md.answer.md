Variables:
- tasks: Task[], an array of Task objects to be displayed in the mat-table
- displayedColumns: string[], an array of column names to be displayed in the mat-table
- selectedTask: Task, the currently selected task to be displayed in the task form

Constants:
- taskDetailsDialogTemplate: TemplateRef<any>, a reference to the dialog template used to display task details

ViewChild:
- none

Functions:
- openTaskDetailsDialog(task: Task): void, opens the task details dialog and passes in the selected task
- editTask(task: Task): void, sets the selected task to the given task for editing
- onTaskChange(task: Task): void, updates the selected task with the given task data
- closeDialog(): void, closes the task details dialog

Mat-table column names:
- "title"
- "description"
- "startDate"
- "endDate"
- "status"
- "actions"