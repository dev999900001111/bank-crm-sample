{
  "GET-/api/sales/history": {
    "sales": [
      {
        "id": 1,
        "customerId": 1,
        "amount": 10000,
        "date": "2022-01-01T00:00:00.000Z",
        "product": "商品A",
        "status": "COMPLETED"
      },
      {
        "id": 2,
        "customerId": 2,
        "amount": 5000,
        "date": "2022-01-02T00:00:00.000Z",
        "product": "商品B",
        "status": "COMPLETED"
      },
      {
        "id": 3,
        "customerId": 3,
        "amount": 8000,
        "date": "2022-01-03T00:00:00.000Z",
        "product": "商品C",
        "status": "PENDING"
      }
    ]
  },
  "POST-/api/sales/create-goal": {
    "salesGoal": {
      "id": 1,
      "userId": 1,
      "targetAmount": 100000,
      "startDate": "2022-01-01T00:00:00.000Z",
      "endDate": "2022-01-31T00:00:00.000Z",
      "progress": 0
    }
  },
  "PUT-/api/sales/update-goal": {
    "salesGoal": {
      "id": 1,
      "userId": 1,
      "targetAmount": 100000,
      "startDate": "2022-01-01T00:00:00.000Z",
      "endDate": "2022-01-31T00:00:00.000Z",
      "progress": 50000
    }
  },
  "GET-/api/sales/goal": {
    "salesGoal": {
      "id": 1,
      "userId": 1,
      "targetAmount": 100000,
      "startDate": "2022-01-01T00:00:00.000Z",
      "endDate": "2022-01-31T00:00:00.000Z",
      "progress": 50000
    }
  },
  "POST-/api/tasks/create": {
    "task": {
      "id": 1,
      "userId": 1,
      "title": "タスクA",
      "description": "タスクAの説明",
      "startDate": "2022-01-01T00:00:00.000Z",
      "endDate": "2022-01-31T00:00:00.000Z",
      "status": "NOT_STARTED",
      "reminder": {
        "id": 1,
        "taskId": 1,
        "time": "2022-01-01T10:00:00.000Z",
        "message": "タスクAのリマインダー"
      }
    }
  }
}