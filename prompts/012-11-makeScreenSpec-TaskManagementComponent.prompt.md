# System Overview
The CRM system for bank salespeople allows them to register new customer information, edit existing customer information, search for customers, and segment customers based on criteria. It also enables salespeople to manage sales and transaction history, tasks and schedules, customer response history, sales goals, and sales performance reporting. The system also includes a claims handling scenario, reference information management, sales literature management, sales team collaboration, and sales training management scenarios. The system aims to improve the efficiency of customer service and sales activities and increase sales.

# All Angular Components
| Component Name | Type | Path | @Input | @Output | MAT_DIALOG_DATA | Child Angular Components | Dialog Angular Components | HTML Components | Description |
|-------------------------|--------|-------------------------------|---------------------------------------------|------------------|-------------------------|---------------------------------|--------------------------|------------------------------------|-----------------------------------------------------------------------------|
| LoginComponent | Page | /login | | | | | ForgotPasswordDialog | mat-form-field, mat-input, button | Login page with username and password input fields and login button |
| DashboardComponent | Page | /dashboard | | | | HeaderComponent, SideMenuComponent | | mat-card | Dashboard with KPIs, recent activities, and upcoming tasks |
| HeaderComponent | Parts | | user: User | | | | | mat-toolbar | Header with logo, user profile, notifications, and logout button |
| SideMenuComponent | Parts | | | | | | | mat-nav-list | Side menu with navigation links |
| CustomerManagementComponent | Page | /customer-management | | | | CustomerFormComponent, CustomerListComponent | CustomerDetailsDialog | mat-card, mat-table | Customer registration, editing, search, and segmentation |
| CustomerFormComponent | Parts | | customer: Customer | customerChange: EventEmitter<Customer> | | | | mat-form-field, mat-input, button | Form for adding or editing customer information |
| CustomerListComponent | Parts | | customers: Customer[] | | | | CustomerDetailsDialog | mat-table | List of customers with search and segmentation functionality |
| CustomerDetailsDialog | Dialog | | | | customer: Customer | | | mat-card, mat-list | Dialog displaying customer details |
| SalesManagementComponent | Page | /sales-management | | | | SalesHistoryComponent, SalesGoalComponent | | mat-card, mat-table | Sales and transaction history, sales goal setting and progress visualization |
| SalesHistoryComponent | Parts | | sales: Sale[] | | | | | mat-table | List of sales and transaction history |
| SalesGoalComponent | Parts | | salesGoal: SalesGoal | salesGoalChange: EventEmitter<SalesGoal> | | | | mat-form-field, mat-input, button | Form for setting sales goals and progress visualization |
| TaskManagementComponent | Page | /task-management | | | | TaskFormComponent, TaskListComponent | TaskDetailsDialog | mat-card, mat-table | Task and schedule management, reminders |
| TaskFormComponent | Parts | | task: Task | taskChange: EventEmitter<Task> | | | | mat-form-field, mat-input, button | Form for adding or editing tasks |
| TaskListComponent | Parts | | tasks: Task[] | | | | TaskDetailsDialog | mat-table | List of tasks and schedules |
| TaskDetailsDialog | Dialog | | | | task: Task | | | mat-card, mat-list | Dialog displaying task details |
| PerformanceReportingComponent | Page | /performance-reporting | | | | SalesPerformanceComponent, KpiOverviewComponent | | mat-card, mat-table | Sales performance reporting and KPI overview |
| SalesPerformanceComponent | Parts | | salesData: SalesData[] | | | | | mat-table, mat-chart | Sales performance visualization |
| KpiOverviewComponent | Parts | | kpis: Kpi[] | | | | | mat-card, mat-list | KPI overview display |
| ClaimsHandlingComponent | Page | /claims-handling | | | | ClaimsListComponent, ClaimResponseComponent | ClaimDetailsDialog | mat-card, mat-table | Claims and inquiries management, complaint trend analysis |
| ClaimsListComponent | Parts | | claims: Claim[] | | | | ClaimDetailsDialog | mat-table | List of claims and inquiries |
| ClaimResponseComponent | Parts | | claim: Claim | claimChange: EventEmitter<Claim> | | | | mat-form-field, mat-input, button | Form for responding to claims |
| ClaimDetailsDialog | Dialog | | | | claim: Claim | | | mat-card, mat-list | Dialog displaying claim details |
| ReferenceManagementComponent | Page | /reference-management | | | | ReferralListComponent, ReferralFormComponent | ReferralDetailsDialog | mat-card, mat-table | Referral information management |
| ReferralListComponent | Parts | | referrals: Referral[] | | | | ReferralDetailsDialog | mat-table | List of referral information |
| ReferralFormComponent | Parts | | referral: Referral | referralChange: EventEmitter<Referral> | | | | mat-form-field, mat-input, button | Form for adding or editing referral information |
| ReferralDetailsDialog | Dialog | | | | referral: Referral | | | mat-card, mat-list | Dialog displaying referral details |
| SalesLiteratureManagementComponent | Page | /sales-literature-management | | | | SalesLiteratureListComponent, LiteratureUploadComponent | LiteratureDetailsDialog | mat-card, mat-table | Sales literature management |
| SalesLiteratureListComponent | Parts | | literatures: SalesLiterature[] | | | | LiteratureDetailsDialog | mat-table | List of sales literature |
| LiteratureUploadComponent | Parts | | | literatureChange: EventEmitter<SalesLiterature> | | | | mat-form-field, mat-input, button | Form for uploading sales literature |
| LiteratureDetailsDialog | Dialog | | | | literature: SalesLiterature | | | mat-card, mat-list | Dialog displaying sales literature details |
| TeamCollaborationComponent | Page | /team-collaboration | | | | TeamMemberListComponent, SharedInformationComponent | | mat-card, mat-table | Team collaboration, success stories, and know-how sharing |
| TeamMemberListComponent | Parts | | teamMembers: User[] | | | | | mat-table | List of team members |
| SharedInformationComponent | Parts | | sharedInfo: SharedInformation[] | | | | | mat-table | List of shared information and success stories |
| TrainingManagementComponent | Page | /training-management | | | | TrainingHistoryComponent, TrainingParticipationComponent | | mat-card, mat-table | Training history, skill acquisition status, and training effectiveness |
| TrainingHistoryComponent | Parts | | trainings: Training[] | | | | | mat-table | List of training history |
| TrainingParticipationComponent | Parts | | training: Training | trainingChange: EventEmitter<Training> | | | | mat-form-field, mat-input, button | Form for participating in training and skill acquisition status visualization |
| ForgotPasswordDialog | Dialog | | | | email: string | | | mat-form-field, mat-input, button | Dialog for resetting forgotten password |

# All Model Classes
 - User(id: number, username: string, password: string, email: string, firstName: string, lastName: string, role: UserRole, profileImage: string)
 - Customer(id: number, firstName: string, lastName: string, email: string, phone: string, address: string, registrationDate: Date, segment: CustomerSegment)
 - Sale(id: number, customerId: number, amount: number, date: Date, product: string, status: SaleStatus)
 - SalesGoal(id: number, userId: number, targetAmount: number, startDate: Date, endDate: Date, progress: number)
 - Task(id: number, userId: number, title: string, description: string, startDate: Date, endDate: Date, status: TaskStatus, reminder: Reminder)
 - Reminder(id: number, taskId: number, time: Date, message: string)
 - SalesData(id: number, userId: number, date: Date, amount: number)
 - Kpi(id: number, name: string, value: number, target: number, unit: string)
 - Claim(id: number, customerId: number, title: string, description: string, date: Date, status: ClaimStatus, response: string)
 - Referral(id: number, customerId: number, referralDate: Date, status: ReferralStatus, notes: string)
 - SalesLiterature(id: number, title: string, description: string, uploadDate: Date, fileUrl: string, fileType: FileType)
 - SharedInformation(id: number, userId: number, title: string, description: string, date: Date, category: InfoCategory)
 - Training(id: number, title: string, description: string, startDate: Date, endDate: Date, status: TrainingStatus, participants: number[])
 - TrainingEffectiveness(id: number, trainingId: number, userId: number, effectivenessScore: number)
 - UserRole(ADMIN: , MANAGER: , EMPLOYEE: )
 - CustomerSegment(PREMIUM: , STANDARD: , BASIC: )
 - SaleStatus(COMPLETED: , PENDING: , CANCELED: )
 - TaskStatus(NOT_STARTED: , IN_PROGRESS: , COMPLETED: , CANCELED: )
 - ClaimStatus(OPEN: , IN_PROGRESS: , RESOLVED: , CLOSED: )
 - ReferralStatus(NEW: , CONTACTED: , CONVERTED: , LOST: )
 - FileType(PDF: , DOCX: , XLSX: , PPTX: )
 - InfoCategory(SUCCESS_STORY: , KNOW_HOW: , TIP: )
 - TrainingStatus(UPCOMING: , ONGOING: , COMPLETED: , CANCELED: )

# All Service Classes
 - AuthService: login(username: string, password: string): Observable<User>, logout(): void, forgotPassword(email: string): Observable<boolean>
 - UserService: getUserProfile(): Observable<User>, updateUserProfile(user: User): Observable<User>, getTeamMembers(): Observable<User[]>
 - CustomerService: createCustomer(customer: Customer): Observable<Customer>, updateCustomer(customer: Customer): Observable<Customer>, getCustomers(): Observable<Customer[]>, searchCustomers(query: string): Observable<Customer[]>, getCustomerDetails(customerId: number): Observable<Customer>
 - SalesService: getSalesHistory(): Observable<Sale[]>, createSalesGoal(salesGoal: SalesGoal): Observable<SalesGoal>, updateSalesGoal(salesGoal: SalesGoal): Observable<SalesGoal>, getSalesGoal(): Observable<SalesGoal>
 - TaskService: createTask(task: Task): Observable<Task>, updateTask(task: Task): Observable<Task>, getTasks(): Observable<Task[]>, getTaskDetails(taskId: number): Observable<Task>, setReminder(taskId: number, reminder: Reminder): Observable<Reminder>
 - PerformanceService: getSalesPerformance(): Observable<SalesData[]>, getKpis(): Observable<Kpi[]>
 - ClaimsService: getClaims(): Observable<Claim[]>, respondToClaim(claimId: number, response: string): Observable<Claim>, getClaimDetails(claimId: number): Observable<Claim>
 - ReferenceService: createReferral(referral: Referral): Observable<Referral>, updateReferral(referral: Referral): Observable<Referral>, getReferrals(): Observable<Referral[]>, getReferralDetails(referralId: number): Observable<Referral>
 - SalesLiteratureService: uploadLiterature(literature: SalesLiterature): Observable<SalesLiterature>, getSalesLiterature(): Observable<SalesLiterature[]>, getLiteratureDetails(literatureId: number): Observable<SalesLiterature>
 - CollaborationService: getSharedInformation(): Observable<SharedInformation[]>, shareInformation(info: SharedInformation): Observable<SharedInformation>
 - TrainingService: getTrainingHistory(): Observable<Training[]>, participateInTraining(trainingId: number): Observable<Training>, getTrainingEffectiveness(): Observable<TrainingEffectiveness[]>

# prompt
Based on the above design, prepare a detailed screen design document for TaskManagementComponent.
> Please think step-by-step when creating the design document.
> First, carefully read the System Overview to understand the purpose of this system.
> Next, look at the Angular Component List carefully to understand the position of the TaskManagementComponent within the overall system.
> Then, think about the elements and functions you need for the TaskManagementComponent.
> Then select from All Service Classes which service (and model) will be used to provide the required information for the component.
- Do not include information that will be implemented by child components.
The chapter structure should be as follows.
```markdown
# Detailed Screen Design Document
## Screen name
## Description
## Child Elements
### Angular element components
- TaskFormComponent(@Input:{task: Task}, @Output:{taskChange: EventEmitter<Task>})
- TaskListComponent(@Input:{tasks: Task[]}, @Output:{})
### Angular dialog components
- TaskDetailsDialog(MAT_DIALOG_DATA:{task: Task})
### HTML components
- mat-card, - mat-table
## Screen layout
## Screen behavior
## Input Form
## Error messages
## Model classes used (excluding use from child components)
## Service classes and methods used (excluding calls from child components)
```