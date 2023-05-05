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

# TaskFormComponent
## Detailed Screen Design Document
### Screen name
TaskFormComponent
### Description
TaskFormComponent is a form for adding or editing tasks. It allows users to input task title, description, start date, end date, and reminder time. Users can also select the task status from a dropdown menu.
### Child Elements
#### Angular element components
None
#### Angular dialog components
None
#### HTML components
- mat-form-field
- mat-input
- mat-select
- mat-option
- mat-datepicker
- mat-timepicker
- button
### Screen layout
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
### Screen behavior
When the TaskFormComponent is opened, it displays a blank form with empty fields. If the component is opened for editing an existing task, the form fields are pre-populated with the task's current values.

The user must input a task title, start date, end date, and task status. The start date and end date fields are date pickers, and the reminder time field is a time picker. The task status field is a dropdown menu with the following options: Not Started, In Progress, Completed, and Canceled.

When the user clicks the Save button, the form data is validated. If any required fields are missing or invalid, an error message is displayed and the form is not submitted. If all fields are valid, the form data is submitted to the TaskService to create or update the task. The user is then redirected to the TaskListComponent.

When the user clicks the Cancel button, the form is closed and the user is redirected to the TaskListComponent without saving any changes.
### Input Form
The TaskFormComponent has the following input fields:
- task: Task (optional)
- taskChange: EventEmitter<Task>

If the task input is provided, the form is opened in edit mode and the task's current values are pre-populated in the form fields. If the task input is not provided, the form is opened in create mode and the form fields are empty.

When the user submits the form, the taskChange event is emitted with the new or updated task object as the event payload.
### Error messages
The following error messages are displayed if the form data is invalid:
- Task title is required.
- Start date is required.
- End date is required.
- Start date must be before end date.
- Reminder time must be after start date.
- Reminder time must be before end date.
- Task status is required.
### Model classes used (excluding use from child components)
- Task
### Service classes and methods used (excluding calls from child components)
- TaskService
  - createTask(task: Task): Observable<Task>
  - updateTask(task: Task): Observable<Task>
### @Input (as Angular component)
- task: Task
### @Output (as Angular component)
- taskChange: EventEmitter<Task>
### MAT_DIALOG_DATA (as Angular dialog component)

### Variables:
- task: Task (represents the task object being edited or created)
- taskForm: NgForm (represents the form object)
- startDatePicker: MatDatepicker<Date> (represents the start date picker object)
- endDatePicker: MatDatepicker<Date> (represents the end date picker object)

### Constants:
- None

### ViewChild:
- None

### Functions:
- onSubmit(): void (called when the form is submitted)
- onCancel(): void (called when the cancel button is clicked)

### Mat-table column names (constants):
- "title"
- "description"
- "startDate"
- "endDate"
- "reminder"
- "status"


## typescript template
```typescript
// src/app/parts/task-form.component.ts
import { Component, OnInit } from '@angular/core';
import { Task } from '../../models';
import { TaskService } from '../../services';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

    @Input() task: Task;
    @Output() taskChange: EventEmitter<Task>;

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
Please write task-form.component.ts, as no explanation is needed.
