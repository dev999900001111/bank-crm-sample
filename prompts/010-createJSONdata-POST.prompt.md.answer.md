{
  "POST-/api/auth/login": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "user": {
      "id": 1,
      "username": "johndoe",
      "email": "johndoe@example.com",
      "firstName": "太郎",
      "lastName": "山田",
      "role": "EMPLOYEE",
      "profileImage": "https://randomuser.me/api/portraits/men/1.jpg"
    }
  },
  "POST-/api/auth/forgot-password": {
    "success": true
  },
  "POST-/api/users/update-profile": {
    "user": {
      "id": 1,
      "username": "johndoe",
      "email": "johndoe@example.com",
      "firstName": "太郎",
      "lastName": "山田",
      "role": "EMPLOYEE",
      "profileImage": "https://randomuser.me/api/portraits/men/1.jpg"
    }
  },
  "POST-/api/customers/create": {
    "customer": {
      "id": 1,
      "firstName": "花子",
      "lastName": "鈴木",
      "email": "hanako.suzuki@example.com",
      "phone": "090-1234-5678",
      "address": "東京都渋谷区神南1-1-1",
      "registrationDate": "2021-10-01T00:00:00.000Z",
      "segment": "PREMIUM"
    }
  },
  "POST-/api/sales/create-goal": {
    "salesGoal": {
      "id": 1,
      "userId": 1,
      "targetAmount": 1000000,
      "startDate": "2021-10-01T00:00:00.000Z",
      "endDate": "2021-12-31T00:00:00.000Z",
      "progress": 0
    }
  },
  "POST-/api/tasks/create": {
    "task": {
      "id": 1,
      "userId": 1,
      "title": "顧客訪問",
      "description": "鈴木さん宅に訪問して商品の説明をする",
      "startDate": "2021-10-15T10:00:00.000Z",
      "endDate": "2021-10-15T12:00:00.000Z",
      "status": "NOT_STARTED",
      "reminder": null
    }
  },
  "POST-/api/tasks/1/reminder": {
    "reminder": {
      "id": 1,
      "taskId": 1,
      "time": "2021-10-15T09:30:00.000Z",
      "message": "鈴木さん宅に向かう"
    }
  },
  "POST-/api/claims/create": {
    "claim": {
      "id": 1,
      "customerId": 1,
      "title": "商品についての問い合わせ",
      "description": "商品の詳細について教えてほしい",
      "date": "2021-10-01T00:00:00.000Z",
      "status": "OPEN",
      "response": null
    }
  },
  "POST-/api/referrals/create": {
    "referral": {
      "id": 1,
      "customerId": 1,
      "referralDate": "2021-10-01T00:00:00.000Z",
      "status": "NEW",
      "notes": "鈴木さんから紹介された"
    }
  },
  "POST-/api/sales-literature/upload": {
    "literature": {
      "id": 1,
      "title": "商品カタログ",
      "description": "当社の商品カタログです",
      "uploadDate": "2021-10-01T00:00:00.000Z",
      "fileUrl": "https://example.com/catalog.pdf",
      "fileType": "PDF"
    }
  },
  "POST-/api/collaboration/share-information": {
    "info": {
      "id": 1,
      "userId": 1,
      "title": "営業成功事例",
      "description": "先日の商談で契約を獲得できました",
      "date": "2021-10-01T00:00:00.000Z",
      "category": "SUCCESS_STORY"
    }
  },
  "POST-/api/training/1/participate": {
    "training": {
      "id": 1,
      "title": "営業トレーニング",
      "description": "営業スキルを向上させるトレーニングです",
      "startDate": "2021-10-15T10:00:00.000Z",
      "endDate": "2021-10-15T12:00:00.000Z",
      "status": "ONGOING",
      "participants": [1]
    }
  }
}