# Reference
## All HTTP API List
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

## Models
export class Task {constructor(public id: number,public userId: number,public title: string,public description: string,public startDate: Date,public endDate: Date,public status: TaskStatus,public reminder: Reminder) {}}
export class Reminder {constructor(public id: number,public taskId: number,public time: Date,public message: string) {}}

# Service Class Name:
TaskService

# Service Class Definition:
{"path":"./src/app/services/task.service.ts","models":["Task","Reminder"],"methods":[{"name":"createTask","params":[{"name":"task","type":"Task"}],"return":"Observable<Task>"},{"name":"updateTask","params":[{"name":"task","type":"Task"}],"return":"Observable<Task>"},{"name":"getTasks","params":[],"return":"Observable<Task[]>"},{"name":"getTaskDetails","params":[{"name":"taskId","type":"number"}],"return":"Observable<Task>"},{"name":"setReminder","params":[{"name":"taskId","type":"number"},{"name":"reminder","type":"Reminder"}],"return":"Observable<Reminder>"}]}

# prompt
Please create an TaskService as Angular Service class.
Add functions that are not in the service class definition as needed.
step by step:
- import all required libraries.
- Authentication tokens for request headers should be get from the authService.getToken.
- Write all implementations.
- Pay close attention to the difference between the HTTP API's ResponseBody Type and the service's Return Type. Even if they are almost the same, they are often slightly different, so use pipe(map()) or other methods to adjust them.
- ResponseBody is returned as String type even if it is written as Date. As a function of the Service class, it must be converted to the Date type according to the model class type.
Only output the source code.