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

# ReferenceManagementComponent
## Detailed Screen Design Document
### Screen name
Reference Management
### Description
The Reference Management screen allows bank salespeople to manage referral information. Salespeople can view a list of existing referrals, add new referrals, and edit existing referrals. They can also view the details of a referral by clicking on it in the list.
### Child Elements
#### Angular element components
- ReferralListComponent(@Input:{referrals: Referral[]}, @Output:{})
- ReferralFormComponent(@Input:{referral: Referral}, @Output:{referralChange: EventEmitter<Referral>})
#### Angular dialog components
- ReferralDetailsDialog(MAT_DIALOG_DATA:{referral: Referral})
#### HTML components
- mat-card
- mat-table
### Screen layout
The screen is divided into two sections. The left section displays a list of existing referrals in a mat-table. The right section displays a form for adding or editing referral information. When a referral is selected from the list, its details are displayed in a dialog box.
### Screen behavior
- When the screen is loaded, the ReferralListComponent retrieves a list of existing referrals from the ReferenceService and displays them in a mat-table.
- When a referral is selected from the list, its details are displayed in a dialog box using the ReferralDetailsDialog component.
- When the "Add Referral" button is clicked, the ReferralFormComponent is displayed with empty fields for adding a new referral.
- When the "Edit" button is clicked on a referral row, the ReferralFormComponent is displayed with the fields pre-populated with the referral information for editing.
- When the "Save" button is clicked on the ReferralFormComponent, the form data is validated and sent to the ReferenceService to create or update the referral information. The ReferralListComponent is then updated with the new or updated referral information.
### Input Form
The ReferralFormComponent contains the following input fields:
- First Name (required)
- Last Name (required)
- Email (required, email format)
- Phone (required, numeric format)
- Referral Date (required, date format)
- Status (required, dropdown with options: NEW, CONTACTED, CONVERTED, LOST)
- Notes (optional)
### Error messages
- "First Name is required."
- "Last Name is required."
- "Email is required."
- "Email must be in a valid format."
- "Phone is required."
- "Phone must be in a valid format."
- "Referral Date is required."
- "Status is required."
### Model classes used (excluding use from child components)
- Referral(id: number, customerId: number, referralDate: Date, status: ReferralStatus, notes: string)
### Service classes and methods used (excluding calls from child components)
- ReferenceService: createReferral(referral: Referral): Observable<Referral>, updateReferral(referral: Referral): Observable<Referral>, getReferrals(): Observable<Referral[]>, getReferralDetails(referralId: number): Observable<Referral>
### @Input (as Angular component)

### @Output (as Angular component)

### MAT_DIALOG_DATA (as Angular dialog component)

### Variables:
- referrals: any[] - an array of referral objects
- displayedColumns: string[] - an array of column names to be displayed in the mat-table
- formTitle: string - the title of the referral form
- selectedReferral: any - the currently selected referral object

### Constants:
- N/A

### ViewChild:
- detailsDialog: TemplateRef<any> - a reference to the details dialog template

### Functions:
- openDetailsDialog(referral: any): void - opens the details dialog for a given referral object
- editReferral(referral: any): void - opens the referral form for editing a given referral object
- onReferralChange(referral: any): void - updates the selected referral object when the referral form is changed
- closeDialog(): void - closes the details dialog


## typescript template
```typescript
// src/app/pages/reference-management.component.ts
import { Component, OnInit } from '@angular/core';
import { Referral } from '../../models';
import { ReferenceService } from '../../services';

@Component({
    selector: 'app-reference-management',
    templateUrl: './reference-management.component.html',
    styleUrls: ['./reference-management.component.scss']
})
export class ReferenceManagementComponent implements OnInit {


    constructor(private referenceService: ReferenceService) {
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
Please write reference-management.component.ts, as no explanation is needed.
