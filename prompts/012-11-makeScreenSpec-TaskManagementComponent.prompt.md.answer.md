# Detailed Screen Design Document
## Screen name
Task Management
## Description
The Task Management screen allows salespeople to manage their tasks and schedules. They can add new tasks, edit existing tasks, and view their task list. They can also set reminders for their tasks to receive notifications when the task is due.
## Child Elements
### Angular element components
- TaskFormComponent(@Input:{task: Task}, @Output:{taskChange: EventEmitter<Task>})
- TaskListComponent(@Input:{tasks: Task[]}, @Output:{})
### Angular dialog components
- TaskDetailsDialog(MAT_DIALOG_DATA:{task: Task})
### HTML components
- mat-card, - mat-table
## Screen layout
The Task Management screen is divided into two sections: the task list and the task form. The task list is displayed on the left side of the screen, and the task form is displayed on the right side of the screen. The task list displays a table of all tasks, including the task title, description, start date, end date, and status. The task form displays a form for adding or editing tasks, including fields for the task title, description, start date, end date, and status. The form also includes a button for setting a reminder for the task.
## Screen behavior
When the Task Management screen is loaded, the task list is displayed on the left side of the screen, and the task form is hidden on the right side of the screen. When a user clicks on a task in the task list, the task form is displayed on the right side of the screen, and the details of the selected task are pre-populated in the form. The user can then edit the task details and save the changes. When a user clicks on the "Add Task" button, the task form is displayed on the right side of the screen, and the user can enter the details of the new task and save it. When a user sets a reminder for a task, a notification will be sent to the user when the task is due.
## Input Form
The task form includes the following input fields:
- Task Title (required)
- Task Description
- Start Date (required)
- End Date (required)
- Task Status (required)
- Reminder (optional)
## Error messages
- "Task Title is required."
- "Start Date is required."
- "End Date is required."
- "Task Status is required."
## Model classes used (excluding use from child components)
- Task(id: number, userId: number, title: string, description: string, startDate: Date, endDate: Date, status: TaskStatus, reminder: Reminder)
- Reminder(id: number, taskId: number, time: Date, message: string)
- TaskStatus(NOT_STARTED: , IN_PROGRESS: , COMPLETED: , CANCELED: )
## Service classes and methods used (excluding calls from child components)
- TaskService: createTask(task: Task): Observable<Task>, updateTask(task: Task): Observable<Task>, getTasks(): Observable<Task[]>, getTaskDetails(taskId: number): Observable<Task>, setReminder(taskId: number, reminder: Reminder): Observable<Reminder>