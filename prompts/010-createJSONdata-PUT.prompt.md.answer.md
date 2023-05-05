{
  "PUT-/api/customers/update": {
    "customer": {
      "id": 123,
      "firstName": "山田",
      "lastName": "太郎",
      "email": "yamada.taro@example.com",
      "phone": "090-1234-5678",
      "address": "東京都渋谷区1-2-3",
      "registrationDate": "2021-01-01",
      "segment": "PREMIUM"
    }
  },
  "PUT-/api/sales/update-goal": {
    "salesGoal": {
      "id": 456,
      "userId": 789,
      "targetAmount": 1000000,
      "startDate": "2021-01-01",
      "endDate": "2021-12-31",
      "progress": 500000
    }
  },
  "PUT-/api/tasks/update": {
    "task": {
      "id": 111,
      "userId": 222,
      "title": "顧客訪問",
      "description": "○○社の担当者と会う",
      "startDate": "2021-06-01T10:00:00",
      "endDate": "2021-06-01T12:00:00",
      "status": "COMPLETED",
      "reminder": {
        "id": 333,
        "taskId": 111,
        "time": "2021-06-01T09:00:00",
        "message": "10時からの顧客訪問があります"
      }
    }
  },
  "PUT-/api/claims/123/respond": {
    "claim": {
      "id": 123,
      "customerId": 456,
      "title": "商品についての問い合わせ",
      "description": "商品の詳細について教えてください",
      "date": "2021-05-01T10:00:00",
      "status": "RESOLVED",
      "response": "商品の詳細は弊社ホームページでご確認いただけます"
    }
  },
  "PUT-/api/referrals/update": {
    "referral": {
      "id": 789,
      "customerId": 123,
      "referralDate": "2021-05-01",
      "status": "CONTACTED",
      "notes": "担当者との面談を設定しました"
    }
  },
  "PUT-/api/training/456/participate": {
    "training": {
      "id": 456,
      "title": "営業力向上セミナー",
      "description": "営業力を向上させるためのセミナーです",
      "startDate": "2021-06-01T10:00:00",
      "endDate": "2021-06-01T12:00:00",
      "status": "COMPLETED",
      "participants": [222, 333, 444]
    }
  }
}