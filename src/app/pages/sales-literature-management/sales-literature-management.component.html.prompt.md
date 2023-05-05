# Detailed Screen Design Document
## Screen name
Sales Literature Management

## Description
The Sales Literature Management screen allows salespeople to manage sales literature, including uploading new literature, viewing existing literature, and editing literature details.

## Child Elements
### Angular element components
- SalesLiteratureListComponent(@Input:{literatures: SalesLiterature[]}, @Output:{})
- LiteratureUploadComponent(@Input:{}, @Output:{literatureChange: EventEmitter<SalesLiterature>})

### Angular dialog components
- LiteratureDetailsDialog(MAT_DIALOG_DATA:{literature: SalesLiterature})

### HTML components
- mat-card
- mat-table

## Screen layout
The Sales Literature Management screen consists of a header, a main content area, and a footer. The header contains the page title and a button for uploading new sales literature. The main content area displays a table of existing sales literature, including the title, description, upload date, and file type. Each row in the table also includes buttons for editing and deleting the corresponding sales literature. Clicking on a row in the table opens a dialog displaying the details of the selected sales literature.

## Screen behavior
- When the Sales Literature Management screen is loaded, the SalesLiteratureListComponent is called to retrieve the list of existing sales literature from the SalesLiteratureService.
- The SalesLiteratureListComponent displays the list of sales literature in a table.
- Clicking on the "Upload New Literature" button in the header opens the LiteratureUploadComponent in a dialog.
- The LiteratureUploadComponent allows the user to upload a new sales literature file and enter the title and description of the literature.
- When the user submits the form in the LiteratureUploadComponent, the new sales literature is added to the database via the SalesLiteratureService and the SalesLiteratureListComponent is updated to display the new literature.
- Clicking on the "Edit" button in a row of the sales literature table opens the LiteratureUploadComponent in a dialog with the details of the selected sales literature pre-populated in the form.
- When the user submits the form in the LiteratureUploadComponent, the edited sales literature is updated in the database via the SalesLiteratureService and the SalesLiteratureListComponent is updated to display the edited literature.
- Clicking on the "Delete" button in a row of the sales literature table prompts the user to confirm the deletion. If the user confirms, the corresponding sales literature is deleted from the database via the SalesLiteratureService and the SalesLiteratureListComponent is updated to remove the deleted literature.
- Clicking on a row in the sales literature table opens the LiteratureDetailsDialog, which displays the details of the selected sales literature.

## Input Form
The LiteratureUploadComponent contains a form for uploading new sales literature and editing existing sales literature. The form includes the following fields:
- Title (required)
- Description (optional)
- File upload (required)

## Error messages
- "Title is required" - displayed if the user attempts to submit the LiteratureUploadComponent form without entering a title.
- "File upload is required" - displayed if the user attempts to submit the LiteratureUploadComponent form without uploading a file.

## Model classes used (excluding use from child components)
- SalesLiterature(id: number, title: string, description: string, uploadDate: Date, fileUrl: string, fileType: FileType)

## Service classes and methods used (excluding calls from child components)
- SalesLiteratureService: uploadLiterature(literature: SalesLiterature): Observable<SalesLiterature>, getSalesLiterature(): Observable<SalesLiterature[]>, getLiteratureDetails(literatureId: number): Observable<SalesLiterature>


## @Input (as Angular component)

## @Output (as Angular component)

## MAT_DIALOG_DATA (as Angular dialog component)


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

---
# prompt
Please carefully review the design information up to this point and create the html for the SalesLiteratureManagementComponent, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use AngularMaterial to create a polished design.
- Calibrate the screen with only the given components.
- Do not use name specified for @Output.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to sales-literature-management.component.html.