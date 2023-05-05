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