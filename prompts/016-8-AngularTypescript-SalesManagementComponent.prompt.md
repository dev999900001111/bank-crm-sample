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

# SalesManagementComponent
## Detailed Screen Design Document

### Screen name
Sales Management

### Description
The Sales Management screen allows salespeople to view their sales history and set sales goals. It consists of two child components: SalesHistoryComponent and SalesGoalComponent.

### Child Elements
#### Angular element components
- SalesHistoryComponent(@Input:{sales: Sale[]}, @Output:{})
- SalesGoalComponent(@Input:{salesGoal: SalesGoal}, @Output:{salesGoalChange: EventEmitter<SalesGoal>})

#### Angular dialog components
None

#### HTML components
- mat-card
- mat-table

### Screen layout
The Sales Management screen is divided into two sections: Sales History and Sales Goal.

The Sales History section is displayed on the left side of the screen and consists of a mat-card containing a mat-table. The table displays the sales history of the logged-in user, including the customer name, sale amount, product, and date.

The Sales Goal section is displayed on the right side of the screen and consists of a mat-card containing a form for setting sales goals. The form includes fields for the target amount, start date, and end date. The current progress towards the sales goal is displayed in a progress bar below the form.

### Screen behavior
The Sales Management screen is loaded when the user navigates to the /sales-management route. The SalesHistoryComponent and SalesGoalComponent are initialized and the sales history and sales goal data are retrieved from the SalesService.

When the user sets a new sales goal using the SalesGoalComponent form, the new sales goal data is sent to the SalesService to be updated. The progress bar is updated to reflect the new sales goal progress.

### Input Form
The SalesGoalComponent includes a form for setting a new sales goal. The form includes the following fields:
- Target amount (number)
- Start date (date)
- End date (date)

### Error messages
If there is an error retrieving the sales history or sales goal data, an error message is displayed in the SalesHistoryComponent or SalesGoalComponent, respectively.

If there is an error updating the sales goal data, an error message is displayed in the SalesGoalComponent.

### Model classes used (excluding use from child components)
- Sale
- SalesGoal

### Service classes and methods used (excluding calls from child components)
- SalesService: getSalesHistory(), createSalesGoal(salesGoal: SalesGoal), updateSalesGoal(salesGoal: SalesGoal), getSalesGoal()
### @Input (as Angular component)

### @Output (as Angular component)

### MAT_DIALOG_DATA (as Angular dialog component)

### Variables:
- sales: any[] - an array of sales data to be displayed in the table
- salesGoal: { targetAmount: number, startDate: Date, endDate: Date, progress: number } - an object representing the sales goal, including the target amount, start and end dates, and progress towards the goal

### Constants:
- ['customerName', 'amount', 'product', 'date'] - an array of strings representing the column names for the mat-table

### ViewChild:
- startDatePicker: MatDatepicker<Date> - a reference to the start datepicker element
- endDatePicker: MatDatepicker<Date> - a reference to the end datepicker element

### Functions:
- updateSalesGoal(): void - a function to update the sales goal based on the values entered in the form and calculate the progress towards the goal.


## typescript template
```typescript
// src/app/pages/sales-management.component.ts
import { Component, OnInit } from '@angular/core';
import { Sale, SalesGoal } from '../../models';
import { SalesService } from '../../services';

@Component({
    selector: 'app-sales-management',
    templateUrl: './sales-management.component.html',
    styleUrls: ['./sales-management.component.scss']
})
export class SalesManagementComponent implements OnInit {


    constructor(private salesService: SalesService) {
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
Please write sales-management.component.ts, as no explanation is needed.
