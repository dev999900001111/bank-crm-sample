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
Please convert the above service class list into JSON format.
The format is as follows.
{"ServiceName",{"path":". /src/app/services/service-name.service.ts", "models":["modelClassName"],"methods":[{"name":"methodName","params":[{"name":"type"}],"return":"returnType<genericType>"}]},,,}
Note that it is minified JSON without line breaks and spaces.