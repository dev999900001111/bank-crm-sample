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

# SalesLiteratureListComponent
## Detailed Screen Design Document
### Screen name
Sales Literature List
### Description
The Sales Literature List screen displays a list of all sales literature available in the system. The list can be sorted and filtered by various criteria. Each item in the list displays the title, description, upload date, and file type of the sales literature. The user can click on an item to view the details of the sales literature in a dialog box.
### Child Elements
#### Angular element components
- LiteratureDetailsDialog(@Input: literature: SalesLiterature, @Output: literatureChange: EventEmitter<SalesLiterature>)
#### Angular dialog components
None
#### HTML components
- mat-table
### Screen layout
The Sales Literature List screen consists of a single mat-table component that displays a list of sales literature. The table has the following columns:
- Title
- Description
- Upload Date
- File Type

The table also has a toolbar with the following buttons:
- Add Literature: Opens a dialog box to upload new sales literature.
- Filter: Opens a dropdown menu to filter the list by file type.
- Sort: Opens a dropdown menu to sort the list by title, upload date, or file type.

Clicking on an item in the table opens a dialog box to display the details of the sales literature.
### Screen behavior
The Sales Literature List screen displays a list of all sales literature available in the system. The list can be sorted and filtered by various criteria. Each item in the list displays the title, description, upload date, and file type of the sales literature. The user can click on an item to view the details of the sales literature in a dialog box.

The user can add new sales literature by clicking on the "Add Literature" button in the toolbar. This opens a dialog box where the user can upload a new file and enter the title and description of the sales literature.

The user can filter the list by file type by clicking on the "Filter" button in the toolbar. This opens a dropdown menu where the user can select the file type to filter by.

The user can sort the list by title, upload date, or file type by clicking on the "Sort" button in the toolbar. This opens a dropdown menu where the user can select the sorting criteria.

Clicking on an item in the table opens a dialog box to display the details of the sales literature. The dialog box displays the title, description, upload date, file type, and a preview of the file. The user can also download the file from the dialog box.
### Input Form
The Sales Literature List screen does not have an input form.
### Error messages
If there is an error retrieving the list of sales literature, a message is displayed at the top of the screen indicating that there was an error and to try again later. If there is an error uploading new sales literature, a message is displayed in the dialog box indicating that there was an error and to try again later. If there is an error downloading a sales literature file, a message is displayed in the dialog box indicating that there was an error and to try again later.
### Model classes used (excluding use from child components)
- SalesLiterature(id: number, title: string, description: string, uploadDate: Date, fileUrl: string, fileType: FileType)
### Service classes and methods used (excluding calls from child components)
- SalesLiteratureService: uploadLiterature(literature: SalesLiterature): Observable<SalesLiterature>, getSalesLiterature(): Observable<SalesLiterature[]>, getLiteratureDetails(literatureId: number): Observable<SalesLiterature>
### @Input (as Angular component)
- literatures: SalesLiterature[]
### @Output (as Angular component)

### MAT_DIALOG_DATA (as Angular dialog component)

### Variables:
- selectedFileType: string - stores the selected file type for filtering
- selectedSort: string - stores the selected sort option
- fileTypes: string[] - an array of all available file types
- literatures: Literature[] - an array of Literature objects to be displayed in the table
- displayedColumns: string[] - an array of column names to be displayed in the table

### Constants:
- COLUMN_TITLE: string - constant for the "title" column name
- COLUMN_DESCRIPTION: string - constant for the "description" column name
- COLUMN_UPLOAD_DATE: string - constant for the "uploadDate" column name
- COLUMN_FILE_TYPE: string - constant for the "fileType" column name

### ViewChild:
- uploadDialog: MatDialog - reference to the upload dialog component
- detailsDialog: MatDialog - reference to the details dialog component

### Functions:
- openUploadDialog(): void - opens the upload dialog component
- applyFilter(): void - applies the selected file type filter to the table
- applySort(): void - applies the selected sort option to the table
- openDetailsDialog(literature: Literature): void - opens the details dialog component for the selected Literature object.


## typescript template
```typescript
// src/app/parts/sales-literature-list.component.ts
import { Component, OnInit } from '@angular/core';
import { SalesLiterature } from '../../models';
import { SalesLiteratureService } from '../../services';

@Component({
    selector: 'app-sales-literature-list',
    templateUrl: './sales-literature-list.component.html',
    styleUrls: ['./sales-literature-list.component.scss']
})
export class SalesLiteratureListComponent implements OnInit {

    @Input() literatures: SalesLiterature[];

    constructor(private salesLiteratureService: SalesLiteratureService) {
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
Please write sales-literature-list.component.ts, as no explanation is needed.
