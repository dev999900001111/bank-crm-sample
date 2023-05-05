{
  "http://example.com/api/sales/history-GET": [
    {
      "id": 1,
      "customerId": 1,
      "amount": 10000,
      "date": "2021-01-01T00:00:00.000Z",
      "product": "Product A",
      "status": "COMPLETED"
    },
    {
      "id": 2,
      "customerId": 2,
      "amount": 5000,
      "date": "2021-01-02T00:00:00.000Z",
      "product": "Product B",
      "status": "COMPLETED"
    },
    {
      "id": 3,
      "customerId": 3,
      "amount": 8000,
      "date": "2021-01-03T00:00:00.000Z",
      "product": "Product C",
      "status": "PENDING"
    }
  ],
  "http://example.com/api/sales/create-goal-POST": {
    "id": 1,
    "userId": 1,
    "targetAmount": 100000,
    "startDate": "2021-01-01T00:00:00.000Z",
    "endDate": "2021-12-31T00:00:00.000Z",
    "progress": 0
  },
  "http://example.com/api/sales/update-goal-PUT": {
    "id": 1,
    "userId": 1,
    "targetAmount": 100000,
    "startDate": "2021-01-01T00:00:00.000Z",
    "endDate": "2021-12-31T00:00:00.000Z",
    "progress": 50000
  },
  "http://example.com/api/sales/goal-GET": {
    "id": 1,
    "userId": 1,
    "targetAmount": 100000,
    "startDate": "2021-01-01T00:00:00.000Z",
    "endDate": "2021-12-31T00:00:00.000Z",
    "progress": 50000
  }
}