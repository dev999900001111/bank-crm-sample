{
  "GET-/api/users/profile": {
    "user": {
      "id": 1,
      "username": "yamada",
      "email": "yamada@example.com",
      "firstName": "太郎",
      "lastName": "山田",
      "role": "EMPLOYEE",
      "profileImage": "https://example.com/profile.jpg"
    }
  },
  "GET-/api/users/team-members": {
    "teamMembers": [
      {
        "id": 2,
        "username": "suzuki",
        "email": "suzuki@example.com",
        "firstName": "花子",
        "lastName": "鈴木",
        "role": "EMPLOYEE",
        "profileImage": "https://example.com/profile.jpg"
      },
      {
        "id": 3,
        "username": "tanaka",
        "email": "tanaka@example.com",
        "firstName": "次郎",
        "lastName": "田中",
        "role": "MANAGER",
        "profileImage": "https://example.com/profile.jpg"
      }
    ]
  },
  "GET-/api/customers": {
    "customers": [
      {
        "id": 1,
        "firstName": "太郎",
        "lastName": "山田",
        "email": "yamada@example.com",
        "phone": "090-1234-5678",
        "address": "東京都渋谷区",
        "registrationDate": "2021-01-01",
        "segment": "PREMIUM"
      },
      {
        "id": 2,
        "firstName": "花子",
        "lastName": "鈴木",
        "email": "suzuki@example.com",
        "phone": "090-2345-6789",
        "address": "東京都新宿区",
        "registrationDate": "2021-02-01",
        "segment": "STANDARD"
      }
    ]
  },
  "GET-/api/customers/search?query=山田": {
    "customers": [
      {
        "id": 1,
        "firstName": "太郎",
        "lastName": "山田",
        "email": "yamada@example.com",
        "phone": "090-1234-5678",
        "address": "東京都渋谷区",
        "registrationDate": "2021-01-01",
        "segment": "PREMIUM"
      }
    ]
  },
  "GET-/api/customers/1": {
    "customer": {
      "id": 1,
      "firstName": "太郎",
      "lastName": "山田",
      "email": "yamada@example.com",
      "phone": "090-1234-5678",
      "address": "東京都渋谷区",
      "registrationDate": "2021-01-01",
      "segment": "PREMIUM"
    }
  },
  "GET-/api/sales/history": {
    "sales": [
      {
        "id": 1,
        "customerId": 1,
        "amount": 10000,
        "date": "2021-01-01",
        "product": "A",
        "status": "COMPLETED"
      },
      {
        "id": 2,
        "customerId": 2,
        "amount": 5000,
        "date": "2021-02-01",
        "product": "B",
        "status": "PENDING"
      }
    ]
  },
  "GET-/api/sales/goal": {
    "salesGoal": {
      "id": 1,
      "userId": 1,
      "targetAmount": 100000,
      "startDate": "2021-01-01",
      "endDate": "2021-12-31",
      "progress": 50000
    }
  },
  "GET-/api/tasks": {
    "tasks": [
      {
        "id": 1,
        "userId": 1,
        "title": "顧客訪問",
        "description": "A社の担当者と会う",
        "startDate": "2021-01-01",
        "endDate": "2021-01-02",
        "status": "COMPLETED",
        "reminder": {
          "id": 1,
          "taskId": 1,
          "time": "2021-01-02T10:00:00",
          "message": "A社の担当者と会う"
        }
      },
      {
        "id": 2,
        "userId": 1,
        "title": "見積もり作成",
        "description": "B社の見積もりを作成する",
        "startDate": "2021-01-03",
        "endDate": "2021-01-05",
        "status": "IN_PROGRESS"
      }
    ]
  },
  "GET-/api/tasks/1": {
    "task": {
      "id": 1,
      "userId": 1,
      "title": "顧客訪問",
      "description": "A社の担当者と会う",
      "startDate": "2021-01-01",
      "endDate": "2021-01-02",
      "status": "COMPLETED",
      "reminder": {
        "id": 1,
        "taskId": 1,
        "time": "2021-01-02T10:00:00",
        "message": "A社の担当者と会う"
      }
    }
  },
  "GET-/api/performance/sales": {
    "salesData": [
      {
        "id": 1,
        "userId": 1,
        "date": "2021-01-01",
        "amount": 10000
      },
      {
        "id": 2,
        "userId": 1,
        "date": "2021-01-02",
        "amount": 20000
      }
    ]
  },
  "GET-/api/performance/kpis": {
    "kpis": [
      {
        "id": 1,
        "name": "売上目標達成率",
        "value": 50,
        "target": 100,
        "unit": "%"
      },
      {
        "id": 2,
        "name": "顧客満足度",
        "value": 80,
        "target": 90,
        "unit": "%"
      }
    ]
  },
  "GET-/api/claims": {
    "claims": [
      {
        "id": 1,
        "customerId": 1,
        "title": "商品について",
        "description": "商品の仕様について質問があります",
        "date": "2021-01-01",
        "status": "OPEN"
      },
      {
        "id": 2,
        "customerId": 2,
        "title": "不良品について",
        "description": "商品が破損していたので交換してほしい",
        "date": "2021-02-01",
        "status": "IN_PROGRESS"
      }
    ]
  },
  "GET-/api/claims/1": {
    "claim": {
      "id": 1,
      "customerId": 1,
      "title": "商品について",
      "description": "商品の仕様について質問があります",
      "date": "2021-01-01",
      "status": "OPEN"
    }
  },
  "GET-/api/referrals": {
    "referrals": [
      {
        "id": 1,
        "customerId": 1,
        "referralDate": "2021-01-01",
        "status": "NEW",
        "notes": "A社の担当者と話した"
      },
      {
        "id": 2,
        "customerId": 2,
        "referralDate": "2021-02-01",
        "status": "CONTACTED",
        "notes": "B社の担当者と話した"
      }
    ]
  },
  "GET-/api/referrals/1": {
    "referral": {
      "id": 1,
      "customerId": 1,
      "referralDate": "2021-01-01",
      "status": "NEW",
      "notes": "A社の担当者と話した"
    }
  },
  "GET-/api/sales-literature": {
    "literature": [
      {
        "id": 1,
        "title": "商品カタログ",
        "description": "当社の商品カタログです",
        "uploadDate": "2021-01-01",
        "fileUrl": "https://example.com/catalog.pdf",
        "fileType": "PDF"
      },
      {
        "id": 2,
        "title": "営業マニュアル",
        "description": "当社の営業マニュアルです",
        "uploadDate": "2021-02-01",
        "fileUrl": "https://example.com/manual.docx",
        "fileType": "DOCX"
      }
    ]
  },
  "GET-/api/sales-literature/1": {
    "literature": {
      "id": 1,
      "title": "商品カタログ",
      "description": "当社の商品カタログです",
      "uploadDate": "2021-01-01",
      "fileUrl": "https://example.com/catalog.pdf",
      "fileType": "PDF"
    }
  },
  "GET-/api/collaboration/shared-information": {
    "sharedInformation":