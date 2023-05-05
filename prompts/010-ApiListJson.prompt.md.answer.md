[
  {
    "method": "POST",
    "path": "/api/auth/login",
    "requestBody": "{ username: string, password: string }",
    "responseBody": "{ token: string, user: User }",
    "description": "Authenticates user and returns a token and user object"
  },
  {
    "method": "POST",
    "path": "/api/auth/forgot-password",
    "requestBody": "{ email: string }",
    "responseBody": "{ success: boolean }",
    "description": "Sends a password reset email to the user"
  },
  {
    "method": "POST",
    "path": "/api/users/update-profile",
    "requestBody": "{ user: User }",
    "responseBody": "{ user: User }",
    "description": "Updates the user's profile information"
  },
  {
    "method": "GET",
    "path": "/api/users/profile",
    "requestBody": "",
    "responseBody": "{ user: User }",
    "description": "Returns the user's profile information"
  },
  {
    "method": "GET",
    "path": "/api/users/team-members",
    "requestBody": "",
    "responseBody": "{ teamMembers: User[] }",
    "description": "Returns a list of team members"
  },
  {
    "method": "POST",
    "path": "/api/customers/create",
    "requestBody": "{ customer: Customer }",
    "responseBody": "{ customer: Customer }",
    "description": "Creates a new customer"
  },
  {
    "method": "PUT",
    "path": "/api/customers/update",
    "requestBody": "{ customer: Customer }",
    "responseBody": "{ customer: Customer }",
    "description": "Updates an existing customer"
  },
  {
    "method": "GET",
    "path": "/api/customers",
    "requestBody": "",
    "responseBody": "{ customers: Customer[] }",
    "description": "Returns a list of all customers"
  },
  {
    "method": "GET",
    "path": "/api/customers/search?query={query}",
    "requestBody": "",
    "responseBody": "{ customers: Customer[] }",
    "description": "Searches for customers based on a query string"
  },
  {
    "method": "GET",
    "path": "/api/customers/{customerId}",
    "requestBody": "",
    "responseBody": "{ customer: Customer }",
    "description": "Returns details of a specific customer"
  },
  {
    "method": "GET",
    "path": "/api/sales/history",
    "requestBody": "",
    "responseBody": "{ sales: Sale[] }",
    "description": "Returns a list of all sales"
  },
  {
    "method": "POST",
    "path": "/api/sales/create-goal",
    "requestBody": "{ salesGoal: SalesGoal }",
    "responseBody": "{ salesGoal: SalesGoal }",
    "description": "Creates a new sales goal"
  },
  {
    "method": "PUT",
    "path": "/api/sales/update-goal",
    "requestBody": "{ salesGoal: SalesGoal }",
    "responseBody": "{ salesGoal: SalesGoal }",
    "description": "Updates an existing sales goal"
  },
  {
    "method": "GET",
    "path": "/api/sales/goal",
    "requestBody": "",
    "responseBody": "{ salesGoal: SalesGoal }",
    "description": "Returns the current sales goal"
  },
  {
    "method": "POST",
    "path": "/api/tasks/create",
    "requestBody": "{ task: Task }",
    "responseBody": "{ task: Task }",
    "description": "Creates a new task"
  },
  {
    "method": "PUT",
    "path": "/api/tasks/update",
    "requestBody": "{ task: Task }",
    "responseBody": "{ task: Task }",
    "description": "Updates an existing task"
  },
  {
    "method": "GET",
    "path": "/api/tasks",
    "requestBody": "",
    "responseBody": "{ tasks: Task[] }",
    "description": "Returns a list of all tasks"
  },
  {
    "method": "GET",
    "path": "/api/tasks/{taskId}",
    "requestBody": "",
    "responseBody": "{ task: Task }",
    "description": "Returns details of a specific task"
  },
  {
    "method": "POST",
    "path": "/api/tasks/{taskId}/reminder",
    "requestBody": "{ reminder: Reminder }",
    "responseBody": "{ reminder: Reminder }",
    "description": "Sets a reminder for a specific task"
  },
  {
    "method": "GET",
    "path": "/api/performance/sales",
    "requestBody": "",
    "responseBody": "{ salesData: SalesData[] }",
    "description": "Returns sales performance data"
  },
  {
    "method": "GET",
    "path": "/api/performance/kpis",
    "requestBody": "",
    "responseBody": "{ kpis: Kpi[] }",
    "description": "Returns key performance indicators"
  },
  {
    "method": "GET",
    "path": "/api/claims",
    "requestBody": "",
    "responseBody": "{ claims: Claim[] }",
    "description": "Returns a list of all claims"
  },
  {
    "method": "PUT",
    "path": "/api/claims/{claimId}/respond",
    "requestBody": "{ response: string }",
    "responseBody": "{ claim: Claim }",
    "description": "Responds to a specific claim"
  },
  {
    "method": "GET",
    "path": "/api/claims/{claimId}",
    "requestBody": "",
    "responseBody": "{ claim: Claim }",
    "description": "Returns details of a specific claim"
  },
  {
    "method": "POST",
    "path": "/api/referrals/create",
    "requestBody": "{ referral: Referral }",
    "responseBody": "{ referral: Referral }",
    "description": "Creates a new referral"
  },
  {
    "method": "PUT",
    "path": "/api/referrals/update",
    "requestBody": "{ referral: Referral }",
    "responseBody": "{ referral: Referral }",
    "description": "Updates an existing referral"
  },
  {
    "method": "GET",
    "path": "/api/referrals",
    "requestBody": "",
    "responseBody": "{ referrals: Referral[] }",
    "description": "Returns a list of all referrals"
  },
  {
    "method": "GET",
    "path": "/api/referrals/{referralId}",
    "requestBody": "",
    "responseBody": "{ referral: Referral }",
    "description": "Returns details of a specific referral"
  },
  {
    "method": "POST",
    "path": "/api/sales-literature/upload",
    "requestBody": "{ literature: SalesLiterature }",
    "responseBody": "{ literature: SalesLiterature }",
    "description": "Uploads a new sales literature document"
  },
  {
    "method": "GET",
    "path": "/api/sales-literature",
    "requestBody": "",
    "responseBody": "{ literature: SalesLiterature[] }",
    "description": "Returns a list of all sales literature documents"
  },
  {
    "method": "GET",
    "path": "/api/sales-literature/{literatureId}",
    "requestBody": "",
    "responseBody": "{ literature: SalesLiterature }",
    "description": "Returns details of a specific sales literature document"
  },
  {
    "method": "POST",
    "path": "/api/collaboration/share-information",
    "requestBody": "{ info: SharedInformation }",
    "responseBody": "{ info: SharedInformation }",
    "description": "Shares new information"
  },
  {
    "method": "GET",
    "path": "/api/collaboration/shared-information",
    "requestBody": "",
    "responseBody": "{ sharedInformation: SharedInformation[] }",
    "description": "Returns a list of all shared information"
  },
  {
    "method": "GET",
    "path": "/api/training/history",
    "requestBody": "",
    "responseBody": "{ trainings: Training[] }",
    "description": "Returns a list of all trainings"
  },
  {
    "method": "POST",
    "path": "/api/training/{trainingId}/participate",
    "requestBody": "",
    "responseBody": "{ training: Training }",
    "description": "Participates in a specific training"
  },
  {
    "method": "GET",
    "path": "/api/training/effectiveness",
    "requestBody": "",
    "responseBody": "{ trainingEffectiveness: TrainingEffectiveness[] }",
    "description": "Returns training effectiveness data"
  }
]