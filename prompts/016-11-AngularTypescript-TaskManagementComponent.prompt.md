# Reference
## Model and Service classes
```typescript
export enum UserRole {ADMIN = 'ADMIN',MANAGER = 'MANAGER',EMPLOYEE = 'EMPLOYEE'}
export enum CustomerSegment {PREMIUM = 'PREMIUM',STANDARD = 'STANDARD',BASIC = 'BASIC'}
export enum SaleStatus {COMPLETED = 'COMPLETED',PENDING = 'PENDING',CANCELED = 'CANCELED'}
export enum TaskStatus {NOT_STARTED = 'NOT_STARTED',IN_PROGRESS = 'IN_PROGRESS',COMPLETED = 'COMPLETED',CANCELED = 'CANCELED'}
export enum ClaimStatus {OPEN = 'OPEN',IN_PROGRESS = 'IN_PROGRESS',RESOLVED = 'RESOLVED',CLOSED = 'CLOSED'}
export enum ReferralStatus {NEW = 'NEW',CONTACTED = 'CONTACTED',CONVERTED = 'CONVERTED',LOST = 'LOST'}
export enum FileType {PDF = 'PDF',DOCX = 'DOCX',XLSX = 'XLSX',PPTX = 'PPTX'}
export enum InfoCategory {SUCCESS_STORY = 'SUCCESS_STORY',KNOW_HOW = 'KNOW_HOW',TIP = 'TIP'}
export enum TrainingStatus {UPCOMING = 'UPCOMING',ONGOING = 'ONGOING',COMPLETED = 'COMPLETED',CANCELED = 'CANCELED'}
export class User {constructor(public id: number,public username: string,public password: string,public email: string,public firstName: string,public lastName: string,public role: UserRole,public profileImage: string) {}}
export class Customer {constructor(public id: number,public firstName: string,public lastName: string,public email: string,public phone: string,public address: string,public registrationDate: Date,public segment: CustomerSegment) {}}
export class Sale {constructor(public id: number,public customerId: number,public amount: number,public date: Date,public product: string,public status: SaleStatus) {}}
export class SalesGoal {constructor(public id: number,public userId: number,public targetAmount: number,public startDate: Date,public endDate: Date,public progress: number) {}}
export class Task {constructor(public id: number,public userId: number,public title: string,public description: string,public startDate: Date,public endDate: Date,public status: TaskStatus,public reminder: Reminder) {}}
export class Reminder {constructor(public id: number,public taskId: number,public time: Date,public message: string) {}}
export class SalesData {constructor(public id: number,public userId: number,public date: Date,public amount: number) {}}
export class Kpi {constructor(public id: number,public name: string,public value: number,public target: number,public unit: string) {}}
export class Claim {constructor(public id: number,public customerId: number,public title: string,public description: string,public date: Date,public status: ClaimStatus,public response: string) {}}
export class Referral {constructor(public id: number,public customerId: number,public referralDate: Date,public status: ReferralStatus,public notes: string) {}}
export class SalesLiterature {constructor(public id: number,public title: string,public description: string,public uploadDate: Date,public fileUrl: string,public fileType: FileType) {}}
export class SharedInformation {constructor(public id: number,public userId: number,public title: string,public description: string,public date: Date,public category: InfoCategory) {}}
export class Training {constructor(public id: number,public title: string,public description: string,public startDate: Date,public endDate: Date,public status: TrainingStatus,public participants: number[]) {}}
export class TrainingEffectiveness {constructor(public id: number,public trainingId: number,public userId: number,public effectivenessScore: number) {}}
// src/app/services/auth-service.ts
export interface AuthService {login(username: string, password: string): Observable<User>;
logout(): void;
forgotPassword(email: string): Observable<boolean>;
getToken(): string;
}

// src/app/services/claims-service.ts
export interface ClaimsService {getClaims(): Observable<Claim[]>;
respondToClaim(claimId: number, response: string): Observable<Claim>;
getClaimDetails(claimId: number): Observable<Claim>;
}

// src/app/services/collaboration-service.ts
export interface CollaborationService {getSharedInformation(): Observable<SharedInformation[]>;
shareInformation(info: SharedInformation): Observable<SharedInformation>;
}

// src/app/services/customer-service.ts
export interface CustomerService {createCustomer(customer: Customer): Observable<Customer>;
updateCustomer(customer: Customer): Observable<Customer>;
getCustomers(): Observable<Customer[]>;
searchCustomers(query: string): Observable<Customer[]>;
getCustomerDetails(customerId: number): Observable<Customer>;
}

// src/app/services/performance-service.ts
export interface PerformanceService {getSalesPerformance(): Observable<SalesData[]>;
getKpis(): Observable<Kpi[]>;
}

// src/app/services/reference-service.ts
export interface ReferenceService {createReferral(referral: Referral): Observable<Referral>;
updateReferral(referral: Referral): Observable<Referral>;
getReferrals(): Observable<Referral[]>;
getReferralDetails(referralId: number): Observable<Referral>;
}

// src/app/services/sales-literature-service.ts
export interface SalesLiteratureService {uploadLiterature(literature: SalesLiterature): Observable<SalesLiterature>;
getSalesLiterature(): Observable<SalesLiterature[]>;
getLiteratureDetails(literatureId: number): Observable<SalesLiterature>;
}

// src/app/services/sales-service.ts
export interface SalesService {getSalesHistory(): Observable<Sale[]>;
createSalesGoal(salesGoal: SalesGoal): Observable<SalesGoal>;
updateSalesGoal(salesGoal: SalesGoal): Observable<SalesGoal>;
getSalesGoal(): Observable<SalesGoal>;
}

// src/app/services/task-service.ts
export interface TaskService {createTask(task: Task): Observable<Task>;
updateTask(task: Task): Observable<Task>;
getTasks(): Observable<Task[]>;
getTaskDetails(taskId: number): Observable<Task>;
setReminder(taskId: number, reminder: Reminder): Observable<Reminder>;
}

// src/app/services/training-service.ts
export interface TrainingService {getTrainingHistory(): Observable<Training[]>;
participateInTraining(trainingId: number): Observable<Training>;
getTrainingEffectiveness(): Observable<TrainingEffectiveness[]>;
}

// src/app/services/user-service.ts
export interface UserService {getUserProfile(): Observable<User>;
updateUserProfile(user: User): Observable<User>;
getTeamMembers(): Observable<User[]>;
}

```
    
## Directory structure sample
src/app/dialogs/sample-dialog.component/
src/app/pages/sample-page.component/
src/app/parts/sample-part.component/
src/app/services/sample.service.ts
src/app/models.ts

# TaskManagementComponent
## Detailed Screen Design Document
### Screen name
Task Management
### Description
The Task Management screen allows salespeople to manage their tasks and schedules. They can add new tasks, edit existing tasks, and view their task list. They can also set reminders for their tasks to receive notifications when the task is due.
### Child Elements
#### Angular element components
- TaskFormComponent(@Input:{task: Task}, @Output:{taskChange: EventEmitter<Task>})
- TaskListComponent(@Input:{tasks: Task[]}, @Output:{})
#### Angular dialog components
- TaskDetailsDialog(MAT_DIALOG_DATA:{task: Task})
#### HTML components
- mat-card, - mat-table
### Screen layout
The Task Management screen is divided into two sections: the task list and the task form. The task list is displayed on the left side of the screen, and the task form is displayed on the right side of the screen. The task list displays a table of all tasks, including the task title, description, start date, end date, and status. The task form displays a form for adding or editing tasks, including fields for the task title, description, start date, end date, and status. The form also includes a button for setting a reminder for the task.
### Screen behavior
When the Task Management screen is loaded, the task list is displayed on the left side of the screen, and the task form is hidden on the right side of the screen. When a user clicks on a task in the task list, the task form is displayed on the right side of the screen, and the details of the selected task are pre-populated in the form. The user can then edit the task details and save the changes. When a user clicks on the "Add Task" button, the task form is displayed on the right side of the screen, and the user can enter the details of the new task and save it. When a user sets a reminder for a task, a notification will be sent to the user when the task is due.
### Input Form
The task form includes the following input fields:
- Task Title (required)
- Task Description
- Start Date (required)
- End Date (required)
- Task Status (required)
- Reminder (optional)
### Error messages
- "Task Title is required."
- "Start Date is required."
- "End Date is required."
- "Task Status is required."
### Model classes used (excluding use from child components)
- Task(id: number, userId: number, title: string, description: string, startDate: Date, endDate: Date, status: TaskStatus, reminder: Reminder)
- Reminder(id: number, taskId: number, time: Date, message: string)
- TaskStatus(NOT_STARTED: , IN_PROGRESS: , COMPLETED: , CANCELED: )
### Service classes and methods used (excluding calls from child components)
- TaskService: createTask(task: Task): Observable<Task>, updateTask(task: Task): Observable<Task>, getTasks(): Observable<Task[]>, getTaskDetails(taskId: number): Observable<Task>, setReminder(taskId: number, reminder: Reminder): Observable<Reminder>
### @Input (as Angular component)

### @Output (as Angular component)

### MAT_DIALOG_DATA (as Angular dialog component)

### Variables:
- tasks: Task[], an array of Task objects to be displayed in the mat-table
- displayedColumns: string[], an array of column names to be displayed in the mat-table
- selectedTask: Task, the currently selected task to be displayed in the task form

### Constants:
- taskDetailsDialogTemplate: TemplateRef<any>, a reference to the dialog template used to display task details

### ViewChild:
- none

### Functions:
- openTaskDetailsDialog(task: Task): void, opens the task details dialog and passes in the selected task
- editTask(task: Task): void, sets the selected task to the given task for editing
- onTaskChange(task: Task): void, updates the selected task with the given task data
- closeDialog(): void, closes the task details dialog

### Mat-table column names:
- "title"
- "description"
- "startDate"
- "endDate"
- "status"
- "actions"


## typescript template
```typescript
// src/app/pages/task-management.component.ts
import { Component, OnInit } from '@angular/core';
import { Task, Reminder, TaskStatus } from '../../models';
import { TaskService } from '../../services';

@Component({
    selector: 'app-task-management',
    templateUrl: './task-management.component.html',
    styleUrls: ['./task-management.component.scss']
})
export class TaskManagementComponent implements OnInit {


    constructor(private taskService: TaskService) {
    }

    ngOnInit(): void {
    }
}
```
---
# prompt
Please carefully review the design information up to this point and add any missing features to COMPONENT.
Be sure to inspect the following points yourself before submitting.
- Please use AngularMaterial to create a polished design.
- Pay attention to the types and variable names (especially the difference between camel case and snake case).
- The argument and return type of the service class name must be correct.
- The @Input and @Output specifications are often forgotten. Please do not forget to check them.
- screen should be for Japanese.
- Replace all TODOs with implementation.
- Import statements and DI statements will be inspected.
Please write task-management.component.ts, as no explanation is needed.
