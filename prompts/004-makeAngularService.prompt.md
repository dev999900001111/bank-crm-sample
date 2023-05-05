# System Overview
System Overview:
The CRM system for bank salespeople aims to improve the efficiency of customer service and sales activities, increase sales, and provide a seamless user experience. The system will include features such as customer registration, information editing, search and segmentation, sales and transaction history management, task and schedule management, customer response history management, sales goal management, sales performance reporting, claims handling, reference information management, sales literature management, sales team collaboration, and sales training management.

List of Screens and Components:

1. Login Screen
   - Username input field
   - Password input field
   - Login button
   - Forgot password link

2. Dashboard
   - Header: Logo, user profile, notifications, logout button
   - Side menu: Customer management, sales management, task management, performance reporting, claims handling, reference management, sales literature, team collaboration, training management
   - Main content: Overview of key performance indicators, recent activities, upcoming tasks, and reminders

3. Customer Management
   - New customer registration form
   - Customer information edit form
   - Customer search form
   - Customer segmentation form
   - Customer details view

4. Sales Management
   - Sales and transaction history list
   - Sales goal setting form
   - Sales goal progress visualization

5. Task Management
   - Task and schedule list
   - Task creation form
   - Task edit form
   - Task details view
   - Reminder settings

6. Performance Reporting
   - Sales performance report form
   - Sales performance visualization
   - KPI overview

7. Claims Handling
   - Claims and inquiries list
   - Claim response form
   - Claim details view
   - Complaint trend analysis visualization

8. Reference Management
   - Referral information list
   - Referral information form
   - Referral details view

9. Sales Literature Management
   - Product literature list
   - Sales literature list
   - Literature upload form
   - Literature details view

10. Team Collaboration
    - Team member list
    - Shared information list
    - Information sharing form
    - Success stories and know-how list

11. Training Management
    - Training history list
    - Training participation form
    - Skill acquisition status visualization
    - Training effectiveness visualization

After the list of screens and components is reviewed by professionals such as UI/UX designers, security specialists, business analysts, database specialists, and a strict consistency checker, an improved version will be presented with their input.

# Angular Components
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

# prompt
After familiarizing yourself with the instructions up to this point, list all the Angular service classes you will need for this system.
- List the method names, arguments, and return values.
- If multiple patterns are possible, choose the simpler design.
- The service list should be reviewed by professionals such as UI/UX designers, security specialists, business analysts, strict consistency checker,  etc., and an improved version should be presented with their input.(The consistency checker will strictly check that your service list reflects all previous requirements.)
Only output the Improved Angular service classes(and method) List.