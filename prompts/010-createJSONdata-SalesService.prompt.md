# model classes
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

# service class
@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private apiUrl = 'http://example.com/api';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getSalesHistory(): Observable<Sale[]> {
    const headers = this.getHeaders();
    return this.http.get<Sale[]>(`${this.apiUrl}/sales/history`, { headers });
  }

  createSalesGoal(salesGoal: SalesGoal): Observable<SalesGoal> {
    const headers = this.getHeaders();
    return this.http.post<SalesGoal>(`${this.apiUrl}/sales/create-goal`, salesGoal, { headers });
  }

  updateSalesGoal(salesGoal: SalesGoal): Observable<SalesGoal> {
    const headers = this.getHeaders();
    return this.http.put<SalesGoal>(`${this.apiUrl}/sales/update-goal`, salesGoal, { headers });
  }

  getSalesGoal(): Observable<SalesGoal> {
    const headers = this.getHeaders();
    return this.http.get<SalesGoal>(`${this.apiUrl}/sales/goal`, { headers });
  }
}

# prompt
Follow the steps below to create mock data for SalesService's http request.
- steps
> 1. check the model class definition.
> 2. check the http request url and http method and return type for each method of the SalesService class.
> 3. Prepare appropriate data that matches the return type. Data should be for Japanese.
> 4. Convert the all prepared data to the following minified JSON format.
>    {{"${json file name (http url)}-${http method(get/post/put/delete/fetch)}":${mock data},{"${json file name (http url)}-${http method(get/post/put/delete/fetch)}":${mock data},,,}
> 5. Confirm that the url and type is correct.
> 6. Confirm that the JSON format is correct.
* Output only the JSON created in 6. Do not output any intermediate steps.
