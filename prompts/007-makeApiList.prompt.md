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
Above is a screen-side design document created assuming Angular.
Based on this design document, please create an appropriate APIs list.
- Please make the API list in a tabular format. The only columns should be "Method", "Path", "RequestBody", and "ResponseBody".
- For login-related APIs, be sure to include a token in the ResponseBody. Even if the token is not specified in the output item of the service class, it must be returned from the API as a hidden item.
- It is not necessary to implement all the methods of the service class. Select functions that should be processed on the server side appropriately and make them into APIs.
- The API list should be reviewed by experts such as UI/UX designers, security specialists, business analysts, and strict consistency checkers, and an improved version should be presented with their input. (Strict consistency checkers will rigorously check that all features that should be implemented on the server are reflected in the API list).
Only output the Improved APIs List.