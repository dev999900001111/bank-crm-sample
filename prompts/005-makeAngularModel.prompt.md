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

Improved Angular Service List:

1. AuthService
   - login(username: string, password: string): Observable<User>
   - logout(): void
   - forgotPassword(email: string): Observable<boolean>

2. UserService
   - getUserProfile(): Observable<User>
   - updateUserProfile(user: User): Observable<User>
   - getTeamMembers(): Observable<User[]>

3. CustomerService
   - createCustomer(customer: Customer): Observable<Customer>
   - updateCustomer(customer: Customer): Observable<Customer>
   - getCustomers(): Observable<Customer[]>
   - searchCustomers(query: string): Observable<Customer[]>
   - getCustomerDetails(customerId: number): Observable<Customer>

4. SalesService
   - getSalesHistory(): Observable<Sale[]>
   - createSalesGoal(salesGoal: SalesGoal): Observable<SalesGoal>
   - updateSalesGoal(salesGoal: SalesGoal): Observable<SalesGoal>
   - getSalesGoal(): Observable<SalesGoal>

5. TaskService
   - createTask(task: Task): Observable<Task>
   - updateTask(task: Task): Observable<Task>
   - getTasks(): Observable<Task[]>
   - getTaskDetails(taskId: number): Observable<Task>
   - setReminder(taskId: number, reminder: Reminder): Observable<Reminder>

6. PerformanceService
   - getSalesPerformance(): Observable<SalesData[]>
   - getKpis(): Observable<Kpi[]>

7. ClaimsService
   - getClaims(): Observable<Claim[]>
   - respondToClaim(claimId: number, response: string): Observable<Claim>
   - getClaimDetails(claimId: number): Observable<Claim>

8. ReferenceService
   - createReferral(referral: Referral): Observable<Referral>
   - updateReferral(referral: Referral): Observable<Referral>
   - getReferrals(): Observable<Referral[]>
   - getReferralDetails(referralId: number): Observable<Referral>

9. SalesLiteratureService
   - uploadLiterature(literature: SalesLiterature): Observable<SalesLiterature>
   - getSalesLiterature(): Observable<SalesLiterature[]>
   - getLiteratureDetails(literatureId: number): Observable<SalesLiterature>

10. CollaborationService
    - getSharedInformation(): Observable<SharedInformation[]>
    - shareInformation(info: SharedInformation): Observable<SharedInformation>

11. TrainingService
    - getTrainingHistory(): Observable<Training[]>
    - participateInTraining(trainingId: number): Observable<Training>
    - getTrainingEffectiveness(): Observable<TrainingEffectiveness[]>

# prompt
Design the Model Classes based on the above design document.
- Please include all items that will be needed in addition to those used on the screen.
- Define enums as appropriate.
- The Model Classes should be reviewed by experts such as UI/UX designers, security specialists, business analysts, consistency checkers, etc., and an improved version should be presented that incorporates their input (consistency checkers strictly check whether the Model Classes reflects all previous designs).
Only the list of improved Model classes (tabular format) is output.