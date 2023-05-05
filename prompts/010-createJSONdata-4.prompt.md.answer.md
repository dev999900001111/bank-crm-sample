{
  "GET-/api/performance/kpis": {
    "kpis": [
      {
        "id": 1,
        "name": "売上高",
        "value": 1000000,
        "target": 1200000,
        "unit": "円"
      },
      {
        "id": 2,
        "name": "新規顧客数",
        "value": 50,
        "target": 60,
        "unit": "人"
      },
      {
        "id": 3,
        "name": "顧客満足度",
        "value": 4.5,
        "target": 5,
        "unit": "点"
      }
    ]
  },
  "GET-/api/claims": {
    "claims": [
      {
        "id": 1,
        "customerId": 1,
        "title": "商品の不良品について",
        "description": "商品が破損していたため、返品したい",
        "date": "2021-10-01",
        "status": "OPEN",
        "response": ""
      },
      {
        "id": 2,
        "customerId": 2,
        "title": "請求書の不備について",
        "description": "請求書の金額が合わないため、確認したい",
        "date": "2021-10-05",
        "status": "IN_PROGRESS",
        "response": ""
      },
      {
        "id": 3,
        "customerId": 3,
        "title": "商品の配送について",
        "description": "商品がまだ届かないため、確認したい",
        "date": "2021-10-10",
        "status": "RESOLVED",
        "response": "商品は配送業者の不手際により遅れていましたが、現在はお手元に届いているかと思います。ご不便をおかけして申し訳ありませんでした。"
      }
    ]
  },
  "PUT-/api/claims/1/respond": {
    "claim": {
      "id": 1,
      "customerId": 1,
      "title": "商品の不良品について",
      "description": "商品が破損していたため、返品したい",
      "date": "2021-10-01",
      "status": "RESOLVED",
      "response": "商品の破損について、誠に申し訳ありませんでした。返品については承認いたしましたので、返品手続きをお願いいたします。"
    }
  },
  "GET-/api/claims/2": {
    "claim": {
      "id": 2,
      "customerId": 2,
      "title": "請求書の不備について",
      "description": "請求書の金額が合わないため、確認したい",
      "date": "2021-10-05",
      "status": "IN_PROGRESS",
      "response": ""
    }
  },
  "POST-/api/referrals/create": {
    "referral": {
      "id": 1,
      "customerId": 1,
      "referralDate": "2021-10-15",
      "status": "CONTACTED",
      "notes": "紹介者からの情報を元に、商品のニーズがあると判断し、アプローチを開始しました。"
    }
  }
}