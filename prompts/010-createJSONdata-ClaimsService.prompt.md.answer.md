{
  "http://example.com/api/claims-GET": [
    {
      "id": 1,
      "customerId": 1,
      "title": "不良品の返品について",
      "description": "商品が破損していたため、返品したいと思います。",
      "date": "2021-10-01T10:00:00.000Z",
      "status": "OPEN",
      "response": ""
    },
    {
      "id": 2,
      "customerId": 2,
      "title": "商品の配送について",
      "description": "商品がまだ届かないのですが、どうなっているのでしょうか？",
      "date": "2021-10-02T14:30:00.000Z",
      "status": "IN_PROGRESS",
      "response": ""
    },
    {
      "id": 3,
      "customerId": 3,
      "title": "請求書の不備について",
      "description": "請求書の金額が間違っているため、修正してほしいです。",
      "date": "2021-10-03T09:15:00.000Z",
      "status": "RESOLVED",
      "response": "請求書の金額を修正しました。"
    }
  ],
  "http://example.com/api/claims/1-PUT": {
    "id": 1,
    "customerId": 1,
    "title": "不良品の返品について",
    "description": "商品が破損していたため、返品したいと思います。",
    "date": "2021-10-01T10:00:00.000Z",
    "status": "RESOLVED",
    "response": "返品手続きを行いました。"
  },
  "http://example.com/api/claims/1-GET": {
    "id": 1,
    "customerId": 1,
    "title": "不良品の返品について",
    "description": "商品が破損していたため、返品したいと思います。",
    "date": "2021-10-01T10:00:00.000Z",
    "status": "RESOLVED",
    "response": "返品手続きを行いました。"
  }
}