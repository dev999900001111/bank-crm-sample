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

# TrainingHistoryComponent
## Detailed Screen Design Document
### Screen name
Training History

### Description
The Training History screen displays a list of completed training sessions for the logged-in user. It also shows the title, description, start and end dates, and status of each training session. The user can participate in a training session by clicking the "Participate" button next to the training session. The user can also view the effectiveness score of each training session they have participated in.

### Child Elements
#### Angular element components
None

#### Angular dialog components
None

#### HTML components
- mat-table

### Screen layout
The Training History screen consists of a single mat-table component that displays a list of completed training sessions. The table has the following columns:
- Title
- Description
- Start Date
- End Date
- Status
- Participate Button
- Effectiveness Score

### Screen behavior
- When the Training History screen is loaded, the component calls the TrainingService's getTrainingHistory() method to retrieve the list of completed training sessions for the logged-in user.
- The component displays the list of training sessions in a mat-table.
- The user can click the "Participate" button next to a training session to participate in the training session. The component calls the TrainingService's participateInTraining(trainingId: number) method to mark the training session as "ongoing" and add the user to the list of participants.
- If the user has already participated in a training session, the component displays the effectiveness score of the training session in the "Effectiveness Score" column.

### Input Form
None

### Error messages
- If there is an error retrieving the list of completed training sessions, the component displays an error message: "Failed to retrieve training history. Please try again later."
- If there is an error participating in a training session, the component displays an error message: "Failed to participate in training. Please try again later." 

### Model classes used (excluding use from child components)
- Training(id: number, title: string, description: string, startDate: Date, endDate: Date, status: TrainingStatus, participants: number[])
- TrainingStatus(UPCOMING: string, ONGOING: string, COMPLETED: string, CANCELED: string)

### Service classes and methods used (excluding calls from child components)
- TrainingService: getTrainingHistory(): Observable<Training[]>, participateInTraining(trainingId: number): Observable<Training>
### @Input (as Angular component)
- trainings: Training[]
### @Output (as Angular component)

### MAT_DIALOG_DATA (as Angular dialog component)

### Variables:
- trainings: Training[] - an array of Training objects to be displayed in the table

### Constants:
- displayedColumns: string[] - an array of column names to be displayed in the table

### ViewChild:
- None

### Functions:
- participate(trainingId: number): void - a function to handle the button click event and participate in the selected training
- getEffectivenessScore(trainingId: number): number - a function to retrieve the effectiveness score for the selected training

### Mat-table column names (constants):
- title: string - the name of the column for the training title
- description: string - the name of the column for the training description
- startDate: string - the name of the column for the training start date
- endDate: string - the name of the column for the training end date
- status: string - the name of the column for the training status
- participate: string - the name of the column for the participate button
- effectivenessScore: string - the name of the column for the training effectiveness score


## typescript template
```typescript
// src/app/parts/training-history.component.ts
import { Component, OnInit } from '@angular/core';
import { Training, TrainingStatus } from '../../models';
import { TrainingService } from '../../services';

@Component({
    selector: 'app-training-history',
    templateUrl: './training-history.component.html',
    styleUrls: ['./training-history.component.scss']
})
export class TrainingHistoryComponent implements OnInit {

    @Input() trainings: Training[];

    constructor(private trainingService: TrainingService) {
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
Please write training-history.component.ts, as no explanation is needed.