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

# TrainingParticipationComponent
## Detailed Screen Design Document
### Screen name
TrainingParticipationComponent
### Description
The TrainingParticipationComponent allows the user to participate in a training session and view their skill acquisition status. The component displays the training title, description, start and end dates, and the number of participants. The user can participate in the training by clicking the "Participate" button, which will update the training status to "Ongoing" and add the user to the list of participants. The component also displays a progress bar indicating the user's skill acquisition status, which is calculated based on the user's participation in the training and their performance in related tasks.
### Child Elements
#### Angular element components
None
#### Angular dialog components
None
#### HTML components
- mat-form-field
- mat-input
- button
- mat-progress-bar
### Screen layout
The TrainingParticipationComponent consists of a card with the following elements:
- Training title
- Training description
- Training start and end dates
- Number of participants
- Participate button
- Progress bar
### Screen behavior
When the component is loaded, it retrieves the training details from the TrainingService and displays them in the card. The progress bar is initially set to 0%. When the user clicks the "Participate" button, the component calls the participateInTraining method of the TrainingService to update the training status and add the user to the list of participants. The progress bar is updated based on the user's participation in the training and their performance in related tasks.
### Input Form
The TrainingParticipationComponent does not have an input form.
### Error messages
If there is an error retrieving the training details or updating the training status, an error message will be displayed indicating the nature of the error.
### Model classes used (excluding use from child components)
- Training(id: number, title: string, description: string, startDate: Date, endDate: Date, status: TrainingStatus, participants: number[])
### Service classes and methods used (excluding calls from child components)
- TrainingService: getTrainingDetails(trainingId: number): Observable<Training>, participateInTraining(trainingId: number): Observable<Training>
### @Input (as Angular component)
- training: Training
### @Output (as Angular component)
- trainingChange: EventEmitter<Training>
### MAT_DIALOG_DATA (as Angular dialog component)

### Variables:
- training: object, contains information about the training

### Constants:
- 'yyyy年MM月dd日': string, date format for start and end dates
- column names for mat-table: string[], names of columns in the table

### Functions:
- participate(): void, function to handle participation in the training
- calculateProgress(): number, function to calculate the progress of the training

### ViewChild:
- None, there are no ViewChild elements in this template.


## typescript template
```typescript
// src/app/parts/training-participation.component.ts
import { Component, OnInit } from '@angular/core';
import { Training } from '../../models';
import { TrainingService } from '../../services';

@Component({
    selector: 'app-training-participation',
    templateUrl: './training-participation.component.html',
    styleUrls: ['./training-participation.component.scss']
})
export class TrainingParticipationComponent implements OnInit {

    @Input() training: Training;
    @Output() trainingChange: EventEmitter<Training>;

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
Please write training-participation.component.ts, as no explanation is needed.
