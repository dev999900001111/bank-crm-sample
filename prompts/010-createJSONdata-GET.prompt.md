# APIs List:
Improved APIs List:

| Method | Path | RequestBody | ResponseBody | Description |
|--------|------|-------------|--------------|-------------|
| POST | /api/auth/login | { username: string, password: string } | { token: string, user: User } | Authenticates user and returns a token and user object |
| POST | /api/auth/forgot-password | { email: string } | { success: boolean } | Sends a password reset email to the user |
| POST | /api/users/update-profile | { user: User } | { user: User } | Updates the user's profile information |
| GET | /api/users/profile | | { user: User } | Returns the user's profile information |
| GET | /api/users/team-members | | { teamMembers: User[] } | Returns a list of team members |
| POST | /api/customers/create | { customer: Customer } | { customer: Customer } | Creates a new customer |
| PUT | /api/customers/update | { customer: Customer } | { customer: Customer } | Updates an existing customer |
| GET | /api/customers | | { customers: Customer[] } | Returns a list of all customers |
| GET | /api/customers/search?query={query} | | { customers: Customer[] } | Searches for customers based on a query string |
| GET | /api/customers/{customerId} | | { customer: Customer } | Returns details of a specific customer |
| GET | /api/sales/history | | { sales: Sale[] } | Returns a list of all sales |
| POST | /api/sales/create-goal | { salesGoal: SalesGoal } | { salesGoal: SalesGoal } | Creates a new sales goal |
| PUT | /api/sales/update-goal | { salesGoal: SalesGoal } | { salesGoal: SalesGoal } | Updates an existing sales goal |
| GET | /api/sales/goal | | { salesGoal: SalesGoal } | Returns the current sales goal |
| POST | /api/tasks/create | { task: Task } | { task: Task } | Creates a new task |
| PUT | /api/tasks/update | { task: Task } | { task: Task } | Updates an existing task |
| GET | /api/tasks | | { tasks: Task[] } | Returns a list of all tasks |
| GET | /api/tasks/{taskId} | | { task: Task } | Returns details of a specific task |
| POST | /api/tasks/{taskId}/reminder | { reminder: Reminder } | { reminder: Reminder } | Sets a reminder for a specific task |
| GET | /api/performance/sales | | { salesData: SalesData[] } | Returns sales performance data |
| GET | /api/performance/kpis | | { kpis: Kpi[] } | Returns key performance indicators |
| GET | /api/claims | | { claims: Claim[] } | Returns a list of all claims |
| PUT | /api/claims/{claimId}/respond | { response: string } | { claim: Claim } | Responds to a specific claim |
| GET | /api/claims/{claimId} | | { claim: Claim } | Returns details of a specific claim |
| POST | /api/referrals/create | { referral: Referral } | { referral: Referral } | Creates a new referral |
| PUT | /api/referrals/update | { referral: Referral } | { referral: Referral } | Updates an existing referral |
| GET | /api/referrals | | { referrals: Referral[] } | Returns a list of all referrals |
| GET | /api/referrals/{referralId} | | { referral: Referral } | Returns details of a specific referral |
| POST | /api/sales-literature/upload | { literature: SalesLiterature } | { literature: SalesLiterature } | Uploads a new sales literature document |
| GET | /api/sales-literature | | { literature: SalesLiterature[] } | Returns a list of all sales literature documents |
| GET | /api/sales-literature/{literatureId} | | { literature: SalesLiterature } | Returns details of a specific sales literature document |
| POST | /api/collaboration/share-information | { info: SharedInformation } | { info: SharedInformation } | Shares new information |
| GET | /api/collaboration/shared-information | | { sharedInformation: SharedInformation[] } | Returns a list of all shared information |
| GET | /api/training/history | | { trainings: Training[] } | Returns a list of all trainings |
| POST | /api/training/{trainingId}/participate | | { training: Training } | Participates in a specific training |
| GET | /api/training/effectiveness | | { trainingEffectiveness: TrainingEffectiveness[] } | Returns training effectiveness data |

# Models List:
| Model Class | Attributes | Enums | Description |
|-------------|------------|-------|-------------|
| User | id: number, username: string, password: string, email: string, firstName: string, lastName: string, role: UserRole, profileImage: string | UserRole | Represents a user in the system |
| Customer | id: number, firstName: string, lastName: string, email: string, phone: string, address: string, registrationDate: Date, segment: CustomerSegment | CustomerSegment | Represents a customer in the system |
| Sale | id: number, customerId: number, amount: number, date: Date, product: string, status: SaleStatus | SaleStatus | Represents a sale transaction |
| SalesGoal | id: number, userId: number, targetAmount: number, startDate: Date, endDate: Date, progress: number | | Represents a sales goal set by a user |
| Task | id: number, userId: number, title: string, description: string, startDate: Date, endDate: Date, status: TaskStatus, reminder: Reminder | TaskStatus | Represents a task or schedule |
| Reminder | id: number, taskId: number, time: Date, message: string | | Represents a reminder for a task |
| SalesData | id: number, userId: number, date: Date, amount: number | | Represents sales data for performance reporting |
| Kpi | id: number, name: string, value: number, target: number, unit: string | | Represents a key performance indicator |
| Claim | id: number, customerId: number, title: string, description: string, date: Date, status: ClaimStatus, response: string | ClaimStatus | Represents a claim or inquiry from a customer |
| Referral | id: number, customerId: number, referralDate: Date, status: ReferralStatus, notes: string | ReferralStatus | Represents a referral information |
| SalesLiterature | id: number, title: string, description: string, uploadDate: Date, fileUrl: string, fileType: FileType | FileType | Represents a sales literature document |
| SharedInformation | id: number, userId: number, title: string, description: string, date: Date, category: InfoCategory | InfoCategory | Represents shared information or success stories |
| Training | id: number, title: string, description: string, startDate: Date, endDate: Date, status: TrainingStatus, participants: number[] | TrainingStatus | Represents a training event |
| TrainingEffectiveness | id: number, trainingId: number, userId: number, effectivenessScore: number | | Represents the effectiveness of a training for a user |

Enums:

1. UserRole
   - ADMIN
   - MANAGER
   - EMPLOYEE

2. CustomerSegment
   - PREMIUM
   - STANDARD
   - BASIC

3. SaleStatus
   - COMPLETED
   - PENDING
   - CANCELED

4. TaskStatus
   - NOT_STARTED
   - IN_PROGRESS
   - COMPLETED
   - CANCELED

5. ClaimStatus
   - OPEN
   - IN_PROGRESS
   - RESOLVED
   - CLOSED

6. ReferralStatus
   - NEW
   - CONTACTED
   - CONVERTED
   - LOST

7. FileType
   - PDF
   - DOCX
   - XLSX
   - PPTX

8. InfoCategory
   - SUCCESS_STORY
   - KNOW_HOW
   - TIP

9. TrainingStatus
   - UPCOMING
   - ONGOING
   - COMPLETED
   - CANCELED

# prompt
以上の設計書に基づいてGET系のAPIのモックデータ（日本人用）を作って下さい。ResponseBodyのみでよいです。
形式は以下のminifiedJSONで、1つにまとめてください。
{"${Method}-${Path}":${mockdata}}
JSON形式のデータ以外は出力しないでください。
