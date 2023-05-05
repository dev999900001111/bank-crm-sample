{
  "http://example.com/api/referrals/create-POST": {
    "id": 1,
    "customerId": 2,
    "referralDate": "2022-01-01T10:00:00.000Z",
    "status": "NEW",
    "notes": "新規顧客紹介"
  },
  "http://example.com/api/referrals/update-PUT": {
    "id": 1,
    "customerId": 2,
    "referralDate": "2022-01-01T10:00:00.000Z",
    "status": "CONTACTED",
    "notes": "顧客紹介済み"
  },
  "http://example.com/api/referrals-GET": [
    {
      "id": 1,
      "customerId": 2,
      "referralDate": "2022-01-01T10:00:00.000Z",
      "status": "NEW",
      "notes": "新規顧客紹介"
    },
    {
      "id": 2,
      "customerId": 3,
      "referralDate": "2022-01-02T10:00:00.000Z",
      "status": "CONTACTED",
      "notes": "既存顧客紹介"
    }
  ],
  "http://example.com/api/referrals/1-GET": {
    "id": 1,
    "customerId": 2,
    "referralDate": "2022-01-01T10:00:00.000Z",
    "status": "NEW",
    "notes": "新規顧客紹介"
  }
}