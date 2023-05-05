export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  EMPLOYEE = 'EMPLOYEE'
}

export enum CustomerSegment {
  PREMIUM = 'PREMIUM',
  STANDARD = 'STANDARD',
  BASIC = 'BASIC'
}

export enum SaleStatus {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
  CANCELED = 'CANCELED'
}

export enum TaskStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED'
}

export enum ClaimStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  RESOLVED = 'RESOLVED',
  CLOSED = 'CLOSED'
}

export enum ReferralStatus {
  NEW = 'NEW',
  CONTACTED = 'CONTACTED',
  CONVERTED = 'CONVERTED',
  LOST = 'LOST'
}

export enum FileType {
  PDF = 'PDF',
  DOCX = 'DOCX',
  XLSX = 'XLSX',
  PPTX = 'PPTX'
}

export enum InfoCategory {
  SUCCESS_STORY = 'SUCCESS_STORY',
  KNOW_HOW = 'KNOW_HOW',
  TIP = 'TIP'
}

export enum TrainingStatus {
  UPCOMING = 'UPCOMING',
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED'
}

export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public role: UserRole,
    public profileImage: string
  ) {}
}

export class Customer {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public address: string,
    public registrationDate: Date,
    public segment: CustomerSegment
  ) {}
}

export class Sale {
  constructor(
    public id: number,
    public customerId: number,
    public amount: number,
    public date: Date,
    public product: string,
    public status: SaleStatus
  ) {}
}

export class SalesGoal {
  constructor(
    public id: number,
    public userId: number,
    public targetAmount: number,
    public startDate: Date,
    public endDate: Date,
    public progress: number
  ) {}
}

export class Task {
  constructor(
    public id: number,
    public userId: number,
    public title: string,
    public description: string,
    public startDate: Date,
    public endDate: Date,
    public status: TaskStatus,
    public reminder: Reminder
  ) {}
}

export class Reminder {
  constructor(
    public id: number,
    public taskId: number,
    public time: Date,
    public message: string
  ) {}
}

export class SalesData {
  constructor(
    public id: number,
    public userId: number,
    public date: Date,
    public amount: number
  ) {}
}

export class Kpi {
  constructor(
    public id: number,
    public name: string,
    public value: number,
    public target: number,
    public unit: string
  ) {}
}

export class Claim {
  constructor(
    public id: number,
    public customerId: number,
    public title: string,
    public description: string,
    public date: Date,
    public status: ClaimStatus,
    public response: string
  ) {}
}

export class Referral {
  constructor(
    public id: number,
    public customerId: number,
    public referralDate: Date,
    public status: ReferralStatus,
    public notes: string
  ) {}
}

export class SalesLiterature {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public uploadDate: Date,
    public fileUrl: string,
    public fileType: FileType
  ) {}
}

export class SharedInformation {
  constructor(
    public id: number,
    public userId: number,
    public title: string,
    public description: string,
    public date: Date,
    public category: InfoCategory
  ) {}
}

export class Training {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public startDate: Date,
    public endDate: Date,
    public status: TrainingStatus,
    public participants: number[]
  ) {}
}

export class TrainingEffectiveness {
  constructor(
    public id: number,
    public trainingId: number,
    public userId: number,
    public effectivenessScore: number
  ) {}
}