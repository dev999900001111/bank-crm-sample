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

# PerformanceReportingComponent
## Detailed Screen Design Document

### Screen name
Performance Reporting

### Description
The Performance Reporting screen displays sales performance data and key performance indicators (KPIs) for the current user. The SalesPerformanceComponent displays a table and a chart of sales data, and the KpiOverviewComponent displays a list of KPIs with their values and targets.

### Child Elements
#### Angular element components
- SalesPerformanceComponent(@Input:{salesData: SalesData[]}, @Output:{})
- KpiOverviewComponent(@Input:{kpis: Kpi[]}, @Output:{})

#### Angular dialog components
None

#### HTML components
- mat-card
- mat-table

### Screen layout
The Performance Reporting screen is divided into two sections: the Sales Performance section and the KPI Overview section. The Sales Performance section is displayed on the left side of the screen and the KPI Overview section is displayed on the right side of the screen.

The Sales Performance section contains a mat-card with a mat-table and a mat-chart. The mat-table displays sales data with columns for date, amount, and product. The mat-chart displays the sales data in a line chart with the date on the x-axis and the amount on the y-axis.

The KPI Overview section contains a mat-card with a mat-table. The mat-table displays KPIs with columns for name, value, target, and unit.

### Screen behavior
When the Performance Reporting screen is loaded, the SalesPerformanceComponent and KpiOverviewComponent are initialized with data from the PerformanceService. The SalesPerformanceComponent displays the sales data in a table and a chart, and the KpiOverviewComponent displays the KPIs in a table.

### Input Form
None

### Error messages
None

### Model classes used (excluding use from child components)
- SalesData
- Kpi

### Service classes and methods used (excluding calls from child components)
- PerformanceService: getSalesPerformance(): Observable<SalesData[]>, getKpis(): Observable<Kpi[]>
### @Input (as Angular component)

### @Output (as Angular component)

### MAT_DIALOG_DATA (as Angular dialog component)

### Variables:
- salesData: any[] - an array of objects containing sales data
- kpis: any[] - an array of objects containing KPI data
- lineChartData: any[] - an array of objects containing data for the line chart
- lineChartLabels: string[] - an array of labels for the line chart
- lineChartOptions: any - an object containing options for the line chart
- lineChartColors: any[] - an array of colors for the line chart
- lineChartLegend: boolean - a boolean indicating whether to show the legend for the line chart
- lineChartType: string - a string indicating the type of chart to display

### Constants:
- matColumnDef: string - a string indicating the name of the column in the mat-table
- date: string - a string indicating the name of the date column in the mat-table
- amount: string - a string indicating the name of the amount column in the mat-table
- product: string - a string indicating the name of the product column in the mat-table

### ViewChild:
- None

### Functions:
- None


## typescript template
```typescript
// src/app/pages/performance-reporting.component.ts
import { Component, OnInit } from '@angular/core';
import { SalesData, Kpi } from '../../models';
import { PerformanceService } from '../../services';

@Component({
    selector: 'app-performance-reporting',
    templateUrl: './performance-reporting.component.html',
    styleUrls: ['./performance-reporting.component.scss']
})
export class PerformanceReportingComponent implements OnInit {


    constructor(private performanceService: PerformanceService) {
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
Please write performance-reporting.component.ts, as no explanation is needed.
