{
  "User": {
    "desc": "Represents a user in the system",
    "props": {
      "id": "number",
      "username": "string",
      "password": "string",
      "email": "string",
      "firstName": "string",
      "lastName": "string",
      "role": "UserRole",
      "profileImage": "string"
    }
  },
  "Customer": {
    "desc": "Represents a customer in the system",
    "props": {
      "id": "number",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "phone": "string",
      "address": "string",
      "registrationDate": "Date",
      "segment": "CustomerSegment"
    }
  },
  "Sale": {
    "desc": "Represents a sale transaction",
    "props": {
      "id": "number",
      "customerId": "number",
      "amount": "number",
      "date": "Date",
      "product": "string",
      "status": "SaleStatus"
    }
  },
  "SalesGoal": {
    "desc": "Represents a sales goal set by a user",
    "props": {
      "id": "number",
      "userId": "number",
      "targetAmount": "number",
      "startDate": "Date",
      "endDate": "Date",
      "progress": "number"
    }
  },
  "Task": {
    "desc": "Represents a task or schedule",
    "props": {
      "id": "number",
      "userId": "number",
      "title": "string",
      "description": "string",
      "startDate": "Date",
      "endDate": "Date",
      "status": "TaskStatus",
      "reminder": "Reminder"
    }
  },
  "Reminder": {
    "desc": "Represents a reminder for a task",
    "props": {
      "id": "number",
      "taskId": "number",
      "time": "Date",
      "message": "string"
    }
  },
  "SalesData": {
    "desc": "Represents sales data for performance reporting",
    "props": {
      "id": "number",
      "userId": "number",
      "date": "Date",
      "amount": "number"
    }
  },
  "Kpi": {
    "desc": "Represents a key performance indicator",
    "props": {
      "id": "number",
      "name": "string",
      "value": "number",
      "target": "number",
      "unit": "string"
    }
  },
  "Claim": {
    "desc": "Represents a claim or inquiry from a customer",
    "props": {
      "id": "number",
      "customerId": "number",
      "title": "string",
      "description": "string",
      "date": "Date",
      "status": "ClaimStatus",
      "response": "string"
    }
  },
  "Referral": {
    "desc": "Represents a referral information",
    "props": {
      "id": "number",
      "customerId": "number",
      "referralDate": "Date",
      "status": "ReferralStatus",
      "notes": "string"
    }
  },
  "SalesLiterature": {
    "desc": "Represents a sales literature document",
    "props": {
      "id": "number",
      "title": "string",
      "description": "string",
      "uploadDate": "Date",
      "fileUrl": "string",
      "fileType": "FileType"
    }
  },
  "SharedInformation": {
    "desc": "Represents shared information or success stories",
    "props": {
      "id": "number",
      "userId": "number",
      "title": "string",
      "description": "string",
      "date": "Date",
      "category": "InfoCategory"
    }
  },
  "Training": {
    "desc": "Represents a training event",
    "props": {
      "id": "number",
      "title": "string",
      "description": "string",
      "startDate": "Date",
      "endDate": "Date",
      "status": "TrainingStatus",
      "participants": "number[]"
    }
  },
  "TrainingEffectiveness": {
    "desc": "Represents the effectiveness of a training for a user",
    "props": {
      "id": "number",
      "trainingId": "number",
      "userId": "number",
      "effectivenessScore": "number"
    }
  },
  "UserRole": {
    "desc": "",
    "props": {
      "ADMIN": "",
      "MANAGER": "",
      "EMPLOYEE": ""
    }
  },
  "CustomerSegment": {
    "desc": "",
    "props": {
      "PREMIUM": "",
      "STANDARD": "",
      "BASIC": ""
    }
  },
  "SaleStatus": {
    "desc": "",
    "props": {
      "COMPLETED": "",
      "PENDING": "",
      "CANCELED": ""
    }
  },
  "TaskStatus": {
    "desc": "",
    "props": {
      "NOT_STARTED": "",
      "IN_PROGRESS": "",
      "COMPLETED": "",
      "CANCELED": ""
    }
  },
  "ClaimStatus": {
    "desc": "",
    "props": {
      "OPEN": "",
      "IN_PROGRESS": "",
      "RESOLVED": "",
      "CLOSED": ""
    }
  },
  "ReferralStatus": {
    "desc": "",
    "props": {
      "NEW": "",
      "CONTACTED": "",
      "CONVERTED": "",
      "LOST": ""
    }
  },
  "FileType": {
    "desc": "",
    "props": {
      "PDF": "",
      "DOCX": "",
      "XLSX": "",
      "PPTX": ""
    }
  },
  "InfoCategory": {
    "desc": "",
    "props": {
      "SUCCESS_STORY": "",
      "KNOW_HOW": "",
      "TIP": ""
    }
  },
  "TrainingStatus": {
    "desc": "",
    "props": {
      "UPCOMING": "",
      "ONGOING": "",
      "COMPLETED": "",
      "CANCELED": ""
    }
  }
}